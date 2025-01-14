import { useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';

const CartPage = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
        <div className="flex-1 flex flex-col gap-4">
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
                onClick={decrement}
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded"
              >
                <Minus size={16} />
              </button>
              <div className="mx-4">{count}</div>
              <button
                onClick={increment}
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded"
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Ціна */}
            <div className="ml-8 text-xl font-bold">$1100</div>
          </div>
        </div>

        <div className="mt-6 lg:mt-0 lg:w-1/3 bg-pageBg border border-gray-700 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Total Price</h3>
          <p className="text-gray-400">Total items: {count}</p>
          <div className="mt-4 text-xl font-bold">Total: $1100</div>
          <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
