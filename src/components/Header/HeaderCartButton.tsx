import { ShoppingBag } from 'lucide-react';
import { NavLink } from 'react-router-dom';

type Props = {
  handleCloseMenu: () => void;
};

export const HeaderCartButton: React.FC<Props> = ({ handleCloseMenu }) => {
  return (
    <NavLink
      onClick={handleCloseMenu}
      to="/cart"
      className="flex grow justify-center"
    >
      <div className="flex items-center justify-center w-16 h-16 hover:bg-lineGray grow">
        <div className="absolute flex items-center justify-center top-4 right-4 rounded-full h-[18px] w-[18px] border-[1px] border-bodyBg hover:border- bg-red-700 z-10 text-[10px] leading-none">
          12
        </div>
        <ShoppingBag size={20} className="relative" />
      </div>
    </NavLink>
  );
};
