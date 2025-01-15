export const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="public\img\cart-is-empty.png"
        alt="Cart is empty"
        className="size-80 mb-8"
      />
      <h2 className="text-2xl font-bold">Your cart is empty</h2>
      <p className="text-lg mt-4">But it&apos;s never too late to fix it :)</p>
    </div>
  );
};
