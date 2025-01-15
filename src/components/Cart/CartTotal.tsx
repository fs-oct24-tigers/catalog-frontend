import { useAppSelector } from '@/app/hooks';
import React, { useState } from 'react';
import Notification from '@/Notification/Notification';

const CartTotal: React.FC = () => {
  const cartProducts = useAppSelector((state) => state.cart);
  const [showNotification, setShowNotification] = useState(false);

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
    setShowNotification(true);
  };

  return (
    <div className="flex flex-col mt-6 lg:mt-0 lg:w-1/3 bg-pageBg border border-gray-700 p-6">
      <h1 className="self-center text-4xl font-bold">${totalPrice}</h1>
      <p className="self-center mt-4 text-gray-400">
        Total items: {totalItems}
      </p>
      <button
        onClick={handleCheckout}
        className="mt-6 h-[48px] w-full bg-btnPrimary hover:bg-btnHover text-white py-2 px-4"
      >
        Checkout
      </button>

      {/* Notification */}
      {showNotification && (
        <Notification
          message="Notification"
          description="Your order has been successfully processed."
          onClose={() => setShowNotification(false)}
          duration={3000}
        />
      )}
    </div>
  );
};

export default CartTotal;
