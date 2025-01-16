import { useAppSelector } from '@/app/hooks';
import { Heart } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  handleCloseMenu: () => void;
};

export const HeaderFavoritesButton: React.FC<Props> = ({ handleCloseMenu }) => {
  const location = useLocation();
  const favoritesProducts = useAppSelector((state) => state.favorites);
  const totalFavorites = favoritesProducts.length;

  return (
    <NavLink
      onClick={handleCloseMenu}
      to="/favourites"
      className={cn(
        'relative flex grow justify-center',
        location.pathname === '/favourites' &&
          "after:content-[''] after:absolute after:block after:bottom-[2px] after:w-full after:h-[2px] after:bg-textWhite",
      )}
    >
      <div className="flex items-center justify-center w-16 h-16 hover:bg-lineGray grow border-r border-gray-700">
        <div className="relative">
          {totalFavorites > 0 && (
            <div className="absolute flex items-center justify-center top-[-9px] right-[-9px] rounded-full h-[18px] w-[18px] bg-red-700 z-10 text-[10px] leading-none">
              {totalFavorites}
            </div>
          )}
          <Heart size={20} />
        </div>
      </div>
    </NavLink>
  );
};
