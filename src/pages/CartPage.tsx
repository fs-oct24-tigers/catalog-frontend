import CartProducts from '@/components/Cart/CartProducts';
import CartTotal from '@/components/Cart/CartTotal';
import { TitlePageProps } from '@/types';

const CartPage: React.FC<TitlePageProps> = ({ title }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-[22px] sm:text-[32px] font-extrabold text-textWhite mb-6 mt-6">
        {title}
      </h1>

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
        <CartProducts />

        <CartTotal />
      </div>
    </div>
  );
};

export default CartPage;
