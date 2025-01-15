import { useAppSelector } from '@/app/hooks';
import React from 'react';

const CartTotal: React.FC = () => {
  const cartProducts = useAppSelector((state) => state.cart);

  const totalPrice = cartProducts.reduce(
    (acc, product) =>
      acc + product.priceDiscount * product.quantity ||
      product.priceRegular * product.quantity,
    0,
  );

  const totalItems = cartProducts.length;

  return (
    <div className="flex flex-col mt-6 lg:mt-0 lg:w-1/3 bg-pageBg border border-gray-700 p-6">
      <h1 className="self-center text-4xl font-bold">${totalPrice}</h1>
      <p className="self-center mt-4 text-gray-400">
        Total items: {totalItems}
      </p>
      <button className="mt-6 h-[48px] w-full bg-btnPrimary hover:bg-btnHover text-white py-2 px-4">
        Checkout
      </button>
    </div>
  );
};

export default CartTotal;
