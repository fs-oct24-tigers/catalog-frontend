import { useAppDispatch, useAppSelector } from '@/app/hooks';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearCart } from '@/features/cart';

const toastConfig = {
  position: 'top-right' as const,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  style: {
    backgroundColor: '#111827',
  },
};

const CartTotal: React.FC = () => {
  const cartProducts = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const totalPrice = cartProducts.reduce(
    (acc, product) =>
      acc + product.priceDiscount * product.quantity ||
      product.priceRegular * product.quantity,
    0,
  );

  const totalItems = cartProducts.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );

  const handleCheckout = () => {
    toast.dismiss();
    if (totalItems === 0) {
      toast.error('Your cart is empty!', {
        ...toastConfig,
        toastId: 'cart-empty',
      });
    } else {
      toast.success('Your order has been successfully placed!', {
        ...toastConfig,
        toastId: 'order-success',
      });
      dispatch(clearCart());
    }
  };

  return (
    <div className="flex flex-col mt-6 lg:mt-0 lg:w-1/3 bg-pageBg border border-gray-700 p-6">
      <h1 className="self-center text-4xl font-bold">${totalPrice}</h1>
      <p className="self-center mt-4 text-gray-400">
        Total items: {totalItems}
      </p>
      <button
        className="mt-6 h-[48px] w-full bg-btnPrimary hover:bg-btnHover text-white py-2 px-4"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
};

export default CartTotal;
