import React, { useState } from 'react';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo';
import { HeaderFavoritesButton } from './HeaderFavoritesButton';
import { HeaderCartButton } from './HeaderCartButton';
import { HeaderMenuButton } from './HeaderMenuButton';
import { HeaderCloseButton } from './HeaderCloseButton';
import { HeaderMenu } from './HeaderMenu';

const navLinks = [
  { name: 'PHONES', pathName: '/phones' },
  { name: 'TABLETS', pathName: '/tablets' },
  { name: 'ACCESSORIES', pathName: '/accessories' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b border-gray-700 h-16 relative z-50 ">
      <nav
        data-cy="nav"
        className="is-fixed-top has-shadow flex items-center justify-between"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="flex  items-center justify-between gap-6 ">
          <Logo />
          {navLinks.map(({ name, pathName }) => (
            <div
              className={cn('size-max h-16 flex items-center hidden sm:flex')}
              key={name}
            >
              <Link
                to={pathName}
                className={cn('text-textGray hover:text-textWhite', {
                  'text-textWhite': location.pathname === pathName,
                })}
              >
                {name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="h-16 flex justify-between items-center hidden sm:flex border-l border-gray-700">
            <HeaderFavoritesButton handleCloseMenu={handleCloseMenu} />
          </div>
          <div className="h-16 flex justify-between items-center hidden sm:flex">
            <HeaderCartButton handleCloseMenu={handleCloseMenu} />
          </div>

          <div className="flex sm:hidden" onClick={handleMenu}>
            {!isMenuOpen ?
              <HeaderMenuButton />
            : <HeaderCloseButton />}
          </div>
        </div>
      </nav>
      {isMenuOpen && <HeaderMenu handleCloseMenu={handleCloseMenu} />}
    </header>
  );
};

export default Header;
