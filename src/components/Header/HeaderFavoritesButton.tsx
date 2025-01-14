import { Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

type Props = {
  handleCloseMenu: () => void;
};

export const HeaderFavoritesButton: React.FC<Props> = ({ handleCloseMenu }) => {
  return (
    <NavLink
      onClick={handleCloseMenu}
      to="/favourites"
      className="flex grow justify-center"
    >
      <div className="flex items-center justify-center w-16 h-16 hover:bg-lineGray grow border-r border-gray-700">
        <Heart size={16} />
      </div>
    </NavLink>
  );
};
