import { Product } from '@/types';
import axios from 'axios';

export const get = async (
  url: string,
  page = 0,
  perPage = 16,
  search: string = '',
): Promise<Product[]> => {
  const response = await axios.get(url, {
    params: {
      search: search,
    },
  });
  const allProducts = response.data as Product[];

  await new Promise((resolve) => setTimeout(resolve, 500));

  const startIndex = page * perPage;
  const endIndex = startIndex + perPage;

  return allProducts.slice(startIndex, endIndex);
};
