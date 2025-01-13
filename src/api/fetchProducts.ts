import { Phone } from '@/types';
import axios from 'axios';

export const fetchProducts = async (url: string): Promise<Phone[]> => {
  const response = await axios.get(url);
  return response.data;
};
