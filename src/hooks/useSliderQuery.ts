import { useQuery } from '@tanstack/react-query';
import { Product } from '@/types';
import { get } from '@/api/delete-fetchProducts';

type QueryData = {
  products: Product[];
};

type UseQueryProps = {
  apiEndpoint: string;
};

const useSliderQuery = ({ apiEndpoint }: UseQueryProps) => {
  const { data, isLoading, isError, error } = useQuery<QueryData>({
    queryKey: ['products', apiEndpoint],
    queryFn: async () => {
      const response = await get(apiEndpoint);
      return {
        products: response.products,
        totalCount: response.totalCount,
      };
    },
  });

  const products = data?.products || [];

  return {
    products,
    isLoading,
    isError,
    error,
  };
};

export default useSliderQuery;
