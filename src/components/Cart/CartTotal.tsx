import { useAppSelector } from '@/app/hooks';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { PurchaseModal } from '../PurchaseModal/PurchaseModal';

const CartTotal: React.FC = () => {
  const cartProducts = useAppSelector((state) => state.cart);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const totalPrice = cartProducts.reduce(
    (acc, product) =>
      acc + (product.priceDiscount || product.priceRegular) * product.quantity,
    0,
  );

  const totalItems = cartProducts.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col mt-6 lg:mt-0 lg:w-1/3 dark:bg-pageBg border dark:border-gray-700 p-6">
      <h1 className="self-center text-slate-950 dark:text-textWhite text-4xl font-bold">
        ${totalPrice.toFixed(2)}
      </h1>
      <p className="self-center mt-4 text-slate-950 dark:text-gray-400">
        Total items: {totalItems}
      </p>
      <button
        className="mt-6 h-[48px] w-full border-2 text-slate-950 hover:border-slate-300 dark:bg-btnPrimary dark:hover:bg-btnHover dark:text-white dark:border-0 py-2 px-4"
        onClick={handleCheckout}
      >
        Checkout
      </button>
      <PurchaseModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default CartTotal;
