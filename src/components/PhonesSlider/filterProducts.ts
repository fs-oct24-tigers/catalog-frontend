import { Phone } from '@/types';

export const filterProducts = (
  products: Phone[],
  filterType?: 'newModels' | 'hotPrices',
): Phone[] => {
  return products.filter((product) => {
    if (filterType === 'newModels') {
      return product.year > 2017;
    } else if (filterType === 'hotPrices') {
      return product.priceRegular - (product.priceDiscount || 0) > 100;
    }
    return true;
  });
};
