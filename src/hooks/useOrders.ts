import { useSupabase } from './useSupabase';
import { useAuth } from '@clerk/clerk-react';
import { CartProduct } from '@/features/cart';

export const useOrders = () => {
  const supabase = useSupabase();
  const { getToken, userId } = useAuth();

  const createOrder = async (products: CartProduct[], totalPrice: number) => {
    if (!userId) {
      throw new Error('User must be authenticated to create an order');
    }

    const token = await getToken({ template: 'supabase' });
    if (!token) {
      throw new Error('No authentication token found');
    }

    supabase.auth.setSession({ access_token: token, refresh_token: '' });

    const orderProducts = products.map((product) => ({
      id: product.itemId,
      name: product.name,
      price: product.priceDiscount || product.priceRegular,
      quantity: product.quantity,
    }));

    const { error } = await supabase.from('orders').insert({
      user_id: userId,
      products: orderProducts,
      total_price: totalPrice,
    });

    if (error) throw error;
  };

  return { createOrder };
};
