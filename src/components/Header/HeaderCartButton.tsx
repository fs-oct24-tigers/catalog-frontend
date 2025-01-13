/* eslint-disable react/prop-types */
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
        <ShoppingBag size={16} />
      </div>
    </NavLink>
  );
};
