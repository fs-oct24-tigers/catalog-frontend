import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', {
    'has-background-grey-lighter': isActive,
  });

const Header: React.FC = () => {
  return (
    <header>
      <nav
        data-cy="nav"
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              className={getLinkClass}
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={getLinkClass}
              to="/products"
            >
              Catalog
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
