import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo';
import { HeaderFavoritesButton } from './HeaderFavoritesButton';
import { HeaderCartButton } from './HeaderCartButton';
import { HeaderMenuButton } from './HeaderMenuButton';
import { HeaderCloseButton } from './HeaderCloseButton';
import { HeaderMenu } from './HeaderMenu';
import { SearchProduct } from './SearchProduct';
import { AuthButtons } from '../Auth/AuthButtons';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

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
    <header className="border-b dark:border-gray-700 h-12 relative z-50 ">
      <nav
        data-cy="nav"
        className="relative is-fixed-top has-shadow flex items-center justify-between"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="flex items-center lg:gap-[60px] sm:gap-[30px]">
          <Logo handleCloseMenu={handleCloseMenu} />
          {navLinks.map(({ name, pathName }) => (
            <div
              className={cn('relative h-12 flex items-center hidden md:flex')}
              key={name}
            >
              <Link
                to={pathName}
                className={cn(
                  'text-slate-600 hover:text-slate-950 dark:text-textGray dark:hover:text-textWhite leading-[42px] after:scale-0',
                  {
                    'dark:text-textWhite after:content-[""] after:absolute after:block after:b-0 after:w-full after:h-[2px] after:bg-slate-950 dark:after:bg-textWhite after:scale-100  after:origin-center after:transition-transform after:duration-300':
                      location.pathname.includes(pathName),
                  },
                )}
              >
                {name}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex">
          <div className="h-12 ml-[10px] flex justify-between items-center  border-l dark:border-gray-700">
            <SearchProduct />
          </div>
          <div className="h-12 flex justify-between items-center border-l dark:border-gray-700">
            <ThemeSwitcher />
          </div>
          <div className="h-12 flex justify-between items-center hidden md:flex border-l dark:border-gray-700">
            <HeaderFavoritesButton handleCloseMenu={handleCloseMenu} />
          </div>
          <div className="h-12 flex justify-between items-center hidden md:flex">
            <HeaderCartButton handleCloseMenu={handleCloseMenu} />
          </div>
          <div className="h-12 flex justify-between items-center hidden md:flex">
            <AuthButtons />
          </div>

          <div className="flex text-slate-950 dark:text-textWhite md:hidden" onClick={handleMenu}>

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
