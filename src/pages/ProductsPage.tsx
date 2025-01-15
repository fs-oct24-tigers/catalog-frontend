import { get } from '@/api/fetchProducts';
import ProductCard from '@/components/product/ProductCard';
import ProductGrid from '@/components/product/ProductGrid';
import { Product } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { Breadcrumbs } from '@/components/BreadCrumbs';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';
import ProductCounter from '@/components/ProductCounter/ProductCounter';
import PagesQuantitySelect from '@/components/PagesQuantitySelect';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/app/hooks';
import { changePerPage } from '@/features/perPage';

type Props = {
  category: string;
};

const ProductsPage: FC<Props> = ({ category }) => {
  const dispatch = useDispatch();
  const perPage = useAppSelector((state) => state.perPage);
  const handlePerPageChange = (perPage: number) => {
    dispatch(changePerPage(perPage));
  };

  const currentPage = 0;

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: [category, currentPage, perPage],
    queryFn: () => get(`/api/${category}.json`, currentPage, +perPage),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching products: {error.message}</div>;
  }

  const productCount = products?.length || 0;

  return (
    <div>
      <Breadcrumbs category={category} />
      <HeaderTitle category={category} />
      <ProductCounter count={productCount} />
      <PagesQuantitySelect
        perPage={perPage}
        handlePerPageChange={handlePerPageChange}
      />
      {products && products?.length > 0 ?
        <ProductGrid>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      : <div>No products available</div>}
    </div>
  );
};

export default ProductsPage;
