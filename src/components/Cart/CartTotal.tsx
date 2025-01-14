import { useAppSelector } from '@/app/hooks';
import React from 'react';

const CartTotal: React.FC = () => {
  const cartProducts = useAppSelector((state) => state.cart);
  console.log(cartProducts);
  return (
    <div className="mt-6 lg:mt-0 lg:w-1/3 bg-pageBg border border-gray-700 p-6 rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Total Price</h3>
      <p className="text-gray-400">Total items: count</p>
      <div className="mt-4 text-xl font-bold">Total: $1100</div>
      <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
        Checkout
      </button>
    </div>
  );
};

export default CartTotal;
