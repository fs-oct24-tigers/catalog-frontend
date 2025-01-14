import CartProducts from '@/components/Cart/CartProducts';
import CartTotal from '@/components/Cart/CartTotal';

const CartPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
        <CartProducts />

        <CartTotal />
      </div>
    </div>
  );
};

export default CartPage;
