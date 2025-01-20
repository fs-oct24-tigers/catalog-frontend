import React from 'react';
import { NavLink } from 'react-router-dom';
import { Category } from '@/types';
import ProductCounter from '../ProductCounter/ProductCounter';

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
      <h3 className="mb-1 text-h3Mobile font-bold text-slate-950 dark:text-textWhite">
        <NavLink to={category.path}>{category.title}</NavLink>
      </h3>
      <div className="-mb-8">
        <ProductCounter count={category.count} />
      </div>
    </div>
  </div>
);
