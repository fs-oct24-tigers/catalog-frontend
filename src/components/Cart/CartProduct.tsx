import type { CartProduct } from '@/features/cart';
import { Minus, Plus, X } from 'lucide-react';
import React from 'react';

type Props = {
  product: CartProduct;
};

const CartProduct: React.FC<Props> = ({ product }) => {
  console.log(product);
  return (
    <div className="w-full bg-cardBg rounded-lg p-4 flex items-center">
      <button className="bg-gray-700 p-2 rounded hover:bg-gray-600 mr-4">
        <X size={16} />
      </button>

      <div>
        <img
          src="/public/api/img/phones/apple-iphone-7/gold/00.webp"
          alt="iphone"
        />
      </div>

      <div className="flex-1">
        <p className="text-lg">Apple iPhone 14 Pro 128GB Silver</p>
      </div>

      <div className="flex items-center">
        <button
          // onClick={decrement}
          className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded"
        >
          <Minus size={16} />
        </button>
        <div className="mx-4"></div>
        <button
          // onClick={increment}
          className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Ціна */}
      <div className="ml-8 text-xl font-bold">$1100</div>
    </div>
  );
};

export default CartProduct;
