import { get } from '@/api/fetchProducts';
import ProductCard from '@/components/product/ProductCard';
import ProductGrid from '@/components/product/ProductGrid';
import { Product } from '@/types';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { FC } from 'react';
import { Breadcrumbs } from '@/components/BreadCrumbs';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';
import ProductCounter from '@/components/ProductCounter/ProductCounter';
import PagesQuantitySelect from '@/components/PagesQuantitySelect';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/app/hooks';
import { changePerPage } from '@/features/perPage';
import SortingSelect from '@/components/SortingSelect';
import { sortProducts } from '@/utils/sortProducts';

type Props = {
  category: string;
};

const ProductsPage: FC<Props> = ({ category }) => {
  const dispatch = useDispatch();
  const perPage = useAppSelector((state) => state.perPage);
  const currentSort = useAppSelector((state) => state.sorting);
  const currentPage = 0;

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: [category, currentPage, perPage],
    queryFn: () => get(`/api/${category}.json`, currentPage, +perPage),
    placeholderData: keepPreviousData,
  });

  const handlePerPageChange = (perPage: number) => {
    dispatch(changePerPage(perPage));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching products: {error.message}</div>;
  }

  const productCount = products?.length || 0;
  const sortedProducts = products ? sortProducts(products, currentSort) : [];

  return (
    <div className="container">
      <Breadcrumbs category={category} />
      <HeaderTitle mainText={category} prefix="Category" category={category} />
      <ProductCounter count={productCount} />
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
    </div>
  );
};

export default ProductsPage;
