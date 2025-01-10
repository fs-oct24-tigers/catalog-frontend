import React from 'react';
import { NavLink } from 'react-router-dom';

type Category = {
  id: number;
  title: string;
  models: string;
  image: string;
  path: string;
};

const categories: Category[] = [
  {
    id: 1,
    title: 'Mobile phones',
    models: '95 models',
    image: '/img/category-phones-new.png',
    path: '/phones',
  },
  {
    id: 2,
    title: 'Tablets',
    models: '24 models',
    image: '/img/category-tablets-new.png',
    path: '/tablets',
  },
  {
    id: 3,
    title: 'Accessories',
    models: '100 models',
    image: '/img/category-accessories-new.png',
    path: '/accessories',
  },
];

export const Categories: React.FC = () => {
  return (
    <section className="xl:mb-20 sm:mb-16 mb-14">
      <h2 className="text-[22px] sm:text-[32px] font-extrabold text-textWhite mb-6">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-3">
        {categories.map((category) => (
          <div key={category.id}>
            <div className="mb-6">
              <NavLink to={category.path}>
                <img
                  src={category.image}
                  alt={category.title}
                />
              </NavLink>
            </div>

            <div>
              <h3 className="mb-1 text-xl font-bold text-textWhite">
                <NavLink to={category.path}>{category.title}</NavLink>
              </h3>
              <p className="text-sm font-semibold text-textGray">
                {category.models}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
