import { useQuery } from '@tanstack/react-query';
import { Product } from '@/types';
import { get } from '@/api/fetchProducts';

type UseQueryProps = {
  category: string;
};

const useProductQuery = ({ category }: UseQueryProps) => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: [category],
    queryFn: async () => {
      const response = await get(`/api/${category}.json`);
      return response.products;
    },
  });

  return {
    products,
    isLoading,
    isError,
    error,
  };
};

export default useProductQuery;
