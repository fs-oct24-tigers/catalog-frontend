import { Product } from '@/types';
import axios from 'axios';

export const get = async (url: string): Promise<Product[]> => {
  const response = await axios.get(url);
  return response.data;
};
