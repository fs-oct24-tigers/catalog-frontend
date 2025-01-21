import { getProducts } from '@/api/apiProducts';
import { useAppSelector } from '@/app/hooks';
import { changePerPage } from '@/features/perPage';
import { Product } from '@/types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

type Props = {
  category: string;
};

const useProducts = ({ category }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const perPage = useAppSelector((state) => state.perPage);
  const currentSort = useAppSelector((state) => state.sorting);

  const currentPage = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const { products, totalCount } = await getProducts(
          category,
          perPage,
          currentPage,
          currentSort,
        );

        setProducts(products);
        setTotalCount(totalCount ?? 0);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category, currentPage, perPage, currentSort]);

  const handlePerPageChange = (perPage: number) => {
    dispatch(changePerPage(perPage));
    setSearchParams({
      page: '1',
      perPage: perPage.toString(),
      sort: currentSort,
    });
  };
  const handlePageChange = ({ selected }: { selected: number }) => {
    setSearchParams({
      page: (selected + 1).toString(),
      perPage: perPage.toString(),
      sort: currentSort,
    });
  };

  return {
    products,
    totalCount,
    perPage,
    currentPage,
    handlePerPageChange,
    handlePageChange,
    isLoading,
    isError,
  };
};

export default useProducts;
