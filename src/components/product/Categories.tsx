import { CategoryCard } from './CategoryCard';

export type Category = {
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
    <section className="mb-14 sm:mb-16 xl:mb-20">
      <div className="container mx-auto px-4 sm:px-0 flex flex-col items-center">
        <div className="w-fit">
          <h2 className="text-h3 sm:text-h2 font-extrabold text-textWhite mb-6">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-3">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
