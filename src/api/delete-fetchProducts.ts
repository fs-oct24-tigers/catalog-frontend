import { Product } from '@/types';
import axios from 'axios';

export const get = async (
  url: string,
  page = 1, // page is 1-based for clarity
  perPage = 160,
): Promise<{ products: Product[]; totalCount: number }> => {
  const response = await axios.get(url);
  const allProducts = response.data as Product[];

  // await new Promise((resolve) => setTimeout(resolve, 500));

  // Adjusting for 0-based indexing
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  return {
    products: allProducts.slice(startIndex, endIndex),
    totalCount: allProducts.length,
  };
};
