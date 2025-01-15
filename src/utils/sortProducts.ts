import { Product } from '@/types';
import { SortType } from '@/features/sorting';

export const sortProducts = (products: Product[], sortType: SortType) => {
  const sortedProducts = [...products];

  switch (sortType) {
    case 'expensive':
      return sortedProducts.sort((a, b) => b.priceDiscount - a.priceDiscount);

    case 'cheapest':
      return sortedProducts.sort((a, b) => a.priceDiscount - b.priceDiscount);

    case 'alphabetically':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));

    default:
      return sortedProducts;
  }
};
