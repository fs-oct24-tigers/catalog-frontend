import { Product } from '@/types';
import axios from 'axios';

export const get = async (
  url: string,
  page = 0,
  perPage = -1,
): Promise<Product[]> => {
  const response = await axios.get(url);
  const allProducts = response.data as Product[];

  // await new Promise((resolve) => setTimeout(resolve, 500));

  const startIndex = page * perPage;
  const endIndex = startIndex + perPage;

  return allProducts.slice(startIndex, endIndex);
};
