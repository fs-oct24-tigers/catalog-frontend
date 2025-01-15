import { useAppSelector } from '@/app/hooks';
import { CartEmpty } from '@/components/Cart/CartEmpty';
import CartProducts from '@/components/Cart/CartProducts';
import CartTotal from '@/components/Cart/CartTotal';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';

const CartPage = () => {
  const cartProducts = useAppSelector((state) => state.cart);
  const cartIsEmpty = cartProducts.length === 0;

  return (
    <div className="container mx-auto p-6">
      <HeaderTitle mainText="Cart" />

      {cartIsEmpty ?
        <CartEmpty />
      : <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
          <CartProducts />

          <CartTotal />
        </div>
      }
    </div>
  );
};

export default CartPage;
