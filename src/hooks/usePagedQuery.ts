import { useQuery } from '@tanstack/react-query';
import { Product } from '@/types';
import { get } from '@/api/fetchProducts';

type QueryData = {
  products: Product[];
  totalCount: number;
};

type UseQueryProps = {
  category: string;
  currentPage: number;
  perPage: number;
  currentSort: string;
};

const usePagedQuery = ({
  category,
  currentPage = 1,
  perPage,
  currentSort,
}: UseQueryProps) => {
  const { data, isLoading, isError, error } = useQuery<QueryData>({
    queryKey: [category, currentPage, perPage, currentSort],
    queryFn: async () => {
      const response = await get(`/api/${category}.json`, currentPage, perPage);
      return {
        products: response.products,
        totalCount: response.totalCount,
      };
    },
  });

  const products = data?.products || [];
  const totalCount = data?.totalCount || 0;

  return {
    products,
    totalCount,
    isLoading,
    isError,
    error,
  };
};

export default usePagedQuery;
