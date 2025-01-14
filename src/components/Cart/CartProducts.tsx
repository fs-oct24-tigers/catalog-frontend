import { useAppSelector } from '@/app/hooks';
import React from 'react';
import CartProduct from './CartProduct';

const CartProducts: React.FC = () => {
  const cartProducts = useAppSelector((state) => state.cart);

  return (
    <div className="flex-1 flex flex-col gap-4">
      {cartProducts.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartProducts;
