import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import ProductGrid from '@/components/product/ProductGrid';
import { Breadcrumbs } from '@/components/BreadCrumbs';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';
import ProductCounter from '@/components/ProductCounter/ProductCounter';
import PagesQuantitySelect from '@/components/PagesQuantitySelect';
import { useAppSelector } from '@/app/hooks';
import { changePerPage } from '@/features/perPage';
import SortingSelect from '@/components/SortingSelect';
import Pagination from '@/components/Pagination';
import { getProducts } from '@/api/apiProducts';
import { Product } from '@/types';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type Props = {
  category: string;
};

const ProductsPage: FC<Props> = ({ category }) => {
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

  if (isError) {
    return <div>Error fetching products</div>;
  }

  return (
    <div className="container">
      <Breadcrumbs category={category} />
      <HeaderTitle mainText={category} prefix="Category" category={category} />
      <ProductCounter count={totalCount} />
      <div className="flex gap-4 items-center mb-4">
        <SortingSelect />
        <PagesQuantitySelect
          perPage={perPage}
          handlePerPageChange={handlePerPageChange}
        />
      </div>
      {isLoading && (
        <SkeletonTheme baseColor="#161827" highlightColor="#0f1121">
          <div className="m-auto grid gap-x-4 gap-y-10 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center place-items-center">
            {Array.from({ length: perPage }).map((_, index) => (
              <div key={index} className="w-full">
                <Skeleton height={487} width="100%" />
              </div>
            ))}
          </div>
        </SkeletonTheme>
      )}
      {products && products.length > 0 && (
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.itemId} product={product} />
          ))}
        </ProductGrid>
      )}
      <Pagination
        currentPage={currentPage}
        totalItems={totalCount}
        perPage={+perPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsPage;
