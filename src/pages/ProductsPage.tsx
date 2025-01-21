import { FC } from 'react';
import useProducts from '@/hooks/useProducts';
import ProductCard from '@/components/product/ProductCard';
import ProductGrid from '@/components/product/ProductGrid';
import { Breadcrumbs } from '@/components/BreadCrumbs';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';
import ProductCounter from '@/components/ProductCounter/ProductCounter';
import PagesQuantitySelect from '@/components/PagesQuantitySelect';
import SortingSelect from '@/components/SortingSelect';
import Pagination from '@/components/Pagination';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type Props = {
  category: string;
};

const ProductsPage: FC<Props> = ({ category }) => {
  const {
    products,
    totalCount,
    perPage,
    currentPage,
    handlePerPageChange,
    handlePageChange,
    isLoading,
    isError,
  } = useProducts({ category });

  if (isError) {
    return <div>Error fetching products</div>;
  }

  return (
    <div className="container">
      <Breadcrumbs category={category} />
      <HeaderTitle mainText={category} prefix="" category={category} />
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
