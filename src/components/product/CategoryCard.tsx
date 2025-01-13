import React from 'react';
import { NavLink } from 'react-router-dom';
import { Category } from './Categories';

type CategoryCardProps = {
  category: Category;
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => (
  <div>
    <div className="mb-6">
      <NavLink to={category.path}>
        <img src={category.image} alt={category.title} />
      </NavLink>
    </div>

    <div>
      <h3 className="mb-1 text-h4 text-textWhite">
        <NavLink to={category.path}>{category.title}</NavLink>
      </h3>
      <p className="text-body font-semibold text-textGray">{category.models}</p>
    </div>
  </div>
);
