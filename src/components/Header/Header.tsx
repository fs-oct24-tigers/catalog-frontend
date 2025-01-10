import React from 'react';
import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from '../Logo';
import { Heart, ShoppingBag } from 'lucide-react';

const navLinks = [
  { name: 'PHONES', pathName: '/phones' },
  { name: 'TABLETS', pathName: '/tablets' },
  { name: 'ACCESSORIES', pathName: '/accessories' },
];

const Header: React.FC = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header className="border-b border-gray-700">
      <nav
        data-cy="nav"
        className="is-fixed-top has-shadow flex items-center justify-between"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="flex  items-center justify-between gap-6 ">
          <Logo />
          {navLinks.map(({ name, pathName }) => (
            <div className={cn('size-max h-16 flex items-center')} key={name}>
              <NavLink
                to={pathName}
                className={cn('text-textGray hover:text-textWhite', {
                  'text-textWhite': location.pathname === pathName,
                })}
              >
                {name}
              </NavLink>
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="flex size-16 items-center justify-center border-x border-gray-700">
            <NavLink to="/favourites">
              <Heart size={16} />
            </NavLink>
          </div>

          <div className="flex size-16 items-center justify-center">
            <NavLink to="/cart">
              <ShoppingBag size={16} />
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
