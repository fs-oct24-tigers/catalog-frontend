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
          className="h-[80px] mr-[30px]"
          src={product.images[0]}
          alt="iphone"
        />
      </div>

      <div className="flex-1">
        <p className="text-lg">{product.name}</p>
      </div>

      <div className="flex items-center">
        <button
          // onClick={decrement}
          className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded"
        >
          <Minus size={16} />
        </button>
        <div className="mx-4">1</div>
        <button
          // onClick={increment}
          className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Ціна */}
      {product.priceDiscount ?
        <div className="ml-8 text-xl font-bold">${product.priceDiscount}</div>
      : <div className="ml-8 text-xl font-bold">${product.priceRegular}</div>}
    </div>
  );
};

export default CartProduct;
