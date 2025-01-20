export const CartEmpty = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-16">
      <div className="absolute w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-float-slow opacity-50" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-float-medium opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-white rounded-full animate-float-fast opacity-40" />
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white rounded-full animate-float-medium opacity-30" />
      </div>
      <img
        src="/img/cart-is-empty.png"
        alt="Cart is empty"
        className="size-80 mb-8 animate-swing"
      />
      <h2 className="text-2xl font-bold">Your cart is empty</h2>
      <p className="text-lg mt-4">But it&apos;s never too late to fix it :)</p>
    </div>
  );
};
