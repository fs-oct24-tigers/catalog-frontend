import { Product, SortType } from '@/types';

export const sortProducts = (products: Product[], sortType: SortType) => {
  const sortedProducts = [...products];

  switch (sortType) {
    case 'expensive':
      return sortedProducts.sort((a, b) => b.priceDiscount - a.priceDiscount);

    case 'cheapest':
      return sortedProducts.sort((a, b) => a.priceDiscount - b.priceDiscount);

    case 'name':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));

    case 'newest':
      return sortedProducts.sort((a, b) => b.year - a.year);

    case 'oldest':
      return sortedProducts.sort((a, b) => a.year - b.year);

    default:
      return sortedProducts;
  }
};
