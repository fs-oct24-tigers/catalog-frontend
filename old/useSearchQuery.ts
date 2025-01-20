import { useQueries } from '@tanstack/react-query';
import { Product } from '@/types';
import { get } from '@/api/delete-fetchProducts';

type UseQueryProps = {
  categories: string[];
  searchQuery: string;
};

const useSearchQuery = ({ categories, searchQuery }: UseQueryProps) => {
  const queryResults = useQueries({
    queries: categories.map((category) => ({
      queryKey: [category],
      queryFn: async (): Promise<Product[]> => {
        const response = await get(`/api/${category}.json`);
        return response.products;
      },
      enabled: !!searchQuery.trim(),
    })),
  });

  const isLoading = queryResults.some((result) => result.isLoading);
  const isError = queryResults.some((result) => result.isError);
  const error = queryResults.find((result) => result.isError)?.error || null;
  const products: Product[] = queryResults
    .flatMap((result) => result.data || [])
    .filter((product) => {
      const query = searchQuery.toLowerCase().trim();
      const productString = JSON.stringify(product).toLowerCase();

      return productString.includes(query);
    });

  return {
    products,
    isLoading,
    isError,
    error,
  };
};

export default useSearchQuery;
