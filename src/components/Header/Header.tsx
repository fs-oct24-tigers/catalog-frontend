import React, { useEffect, useState } from 'react';
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
  { pathName: '/favourites' },
  { pathName: '/cart' },
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className="border-b border-gray-700 h-16 relative z-50 ">
      <nav
        data-cy="nav"
        className="is-fixed-top has-shadow flex items-center justify-between"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="flex items-center gap-[64px] ">
          <Logo />
          {navLinks.map(({ name, pathName }) => (
            <div
              className={cn(
                'relative size-max h-16 flex items-center hidden sm:flex',
              )}
              key={name}
            >
              <Link
                to={pathName}
                className={cn(
                  'text-textGray hover:text-textWhite leading-[55px] ',
                  {
                    'text-textWhite after:content-[""] after:absolute after:block after:b-0 after:w-full after:h-[2px] after:bg-textWhite':
                      location.pathname === pathName,
                  },
                )}
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
