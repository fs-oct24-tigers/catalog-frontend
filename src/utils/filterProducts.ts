import { Product } from '@/types';

export const filterProducts = (
  products: Product[],
  filterType?: 'newModels' | 'hotPrices',
): Product[] => {
  return products.filter((product) => {
    if (filterType === 'newModels') {
      return product.year > 2017;
    } else if (filterType === 'hotPrices') {
      return product.priceRegular - (product.priceDiscount || 0) > 50;
    }
    return true;
  });
};
