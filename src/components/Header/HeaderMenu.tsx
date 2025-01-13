/* eslint-disable react/prop-types */
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
        <div className="flex justify-center py-4 " key={name}>
          <NavLink
            onClick={handleCloseMenu}
            to={pathName}
            className={cn('text-textGray hover:text-textWhite', {
              'text-textWhite': location.pathname === pathName,
            })}
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
