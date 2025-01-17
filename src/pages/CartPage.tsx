import { useAppSelector } from '@/app/hooks';
import { CartEmpty } from '@/components/Cart/CartEmpty';
import { BackButton } from '@/components/BackButton/BackButton';

import CartProducts from '@/components/Cart/CartProducts';
import CartTotal from '@/components/Cart/CartTotal';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';

const CartPage = () => {
  const cartProducts = useAppSelector((state) => state.cart);
  const cartIsEmpty = cartProducts.length === 0;

  return (
    <>
      {cartIsEmpty ?
        <CartEmpty />
      : <div className="container mx-auto pt-6 sm:pt-10">
          <BackButton />
          <HeaderTitle mainText="Cart" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
            <CartProducts />

            <CartTotal />
          </div>
        </div>
      }
    </>
  );
};

export default CartPage;
