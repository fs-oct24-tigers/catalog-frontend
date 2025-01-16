import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import usePagedQuery from '@/hooks/usePagedQuery';
import ProductCard from '@/components/Product/ProductCard';
import ProductGrid from '@/components/Product/ProductGrid';
import { Breadcrumbs } from '@/components/BreadCrumbs';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';
import ProductCounter from '@/components/ProductCounter/ProductCounter';
import PagesQuantitySelect from '@/components/PagesQuantitySelect';
import { useAppSelector } from '@/app/hooks';
import { changePerPage } from '@/features/perPage';
import SortingSelect from '@/components/SortingSelect';
import { sortProducts } from '@/utils/sortProducts';
import Pagination from '@/components/Pagination';

type Props = {
  category: string;
};

const ProductsPage: FC<Props> = ({ category }) => {
  const dispatch = useDispatch();
  const perPage = useAppSelector((state) => state.perPage);
  const currentSort = useAppSelector((state) => state.sorting);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const { products, totalCount, isLoading, isError } = usePagedQuery({
    category,
    currentPage,
    perPage,
    currentSort,
  });

  const handlePerPageChange = (perPage: number) => {
    dispatch(changePerPage(perPage));
    setSearchParams({ page: '1', perPage: perPage.toString() });
  };
  const handlePageChange = ({ selected }: { selected: number }) => {
    setSearchParams({
      page: (selected + 1).toString(),
      perPage: perPage.toString(),
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching products</div>;
  }

  const sortedProducts = products && sortProducts(products, currentSort);

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
      {sortedProducts && sortedProducts.length > 0 ?
        <ProductGrid>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      : <div>No products available</div>}
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
