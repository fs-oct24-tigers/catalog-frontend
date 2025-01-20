import { useAppSelector } from '@/app/hooks';
import { ShoppingBag } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  handleCloseMenu: () => void;
};

export const HeaderCartButton: React.FC<Props> = ({ handleCloseMenu }) => {
  const location = useLocation();
  const cartProducts = useAppSelector((state) => state.cart);
  const totalItems = cartProducts.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );

  return (
    <NavLink
      onClick={handleCloseMenu}
      to="/cart"
      className={cn(
        'relative flex grow justify-center after:content-[""] after:absolute after:block after:bottom-[2px] after:w-full after:h-[2px] after:bg-textWhite after:scale-0',
        location.pathname === '/cart' &&
          "after:content-[''] after:absolute after:block after:bottom-0 after:w-full after:h-[2px] after:bg-slate-950 dark:after:bg-textWhite after:scale-100  after:origin-center after:transition-transform after:duration-300",
      )}
    >
      <div className="flex items-center justify-center w-12 h-12 dark:hover:bg-lineGray grow dark:border-gray-700">
        <div className="relative">
          {totalItems > 0 && (
            <div className="absolute flex items-center justify-center top-[-9px] right-[-8px] rounded-full h-[18px] w-[18px] bg-red-600 z-10 text-[10px] leading-none">
              {totalItems}
            </div>
          )}
          <ShoppingBag size={20} />
        </div>
      </div>
    </NavLink>
  );
};
