import { BackButton } from '@/components/BackButton/BackButton';
import CartProducts from '@/components/Cart/CartProducts';
import CartTotal from '@/components/Cart/CartTotal';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';

const CartPage = () => {
  return (
    <div className="container mx-auto p-6">
      <BackButton />
      <HeaderTitle mainText="Cart" />

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
        <CartProducts />

        <CartTotal />
      </div>
    </div>
  );
};

export default CartPage;
