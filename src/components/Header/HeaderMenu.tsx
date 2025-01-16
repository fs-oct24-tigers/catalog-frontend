import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { HeaderFavoritesButton } from '../Header/HeaderFavoritesButton';
import { HeaderCartButton } from '../Header/HeaderCartButton';

type Props = {
  handleCloseMenu: () => void;
};

const navLinks = [
  { name: 'PHONES', pathName: '/phones' },
  { name: 'TABLETS', pathName: '/tablets' },
  { name: 'ACCESSORIES', pathName: '/accessories' },
];

export const HeaderMenu: React.FC<Props> = ({ handleCloseMenu }) => {
  const location = useLocation();

  return (
    <menu className="h-screen relative z-20 bg-bodyBg">
      {navLinks.map(({ name, pathName }) => (
        <div className=" flex justify-center py-4 " key={name}>
          <NavLink
            onClick={handleCloseMenu}
            to={pathName}
            className={cn(
              'relative text-textGray hover:text-textWhite leading-[55px]',
              {
                'text-textWhite after:content-[""] after:absolute after:block after:b-0 after:w-full after:h-[2px] after:bg-textWhite':
                  location.pathname.includes(pathName),
              },
            )}
          >
            {name}
          </NavLink>
        </div>
      ))}
      <footer className="flex justify-between items-center w-full border-t border-gray-700 fixed inset-x-0 bottom-0">
        <HeaderFavoritesButton handleCloseMenu={handleCloseMenu} />

        <HeaderCartButton handleCloseMenu={handleCloseMenu} />
      </footer>
    </menu>
  );
};
