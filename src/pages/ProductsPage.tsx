import { get } from '@/api/fetchProducts';
import ProductCard from '@/components/product/ProductCard';
import ProductGrid from '@/components/product/ProductGrid';
import { Product } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { Breadcrumbs } from '@/components/BreadCrumbs';
import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle';
import ProductCounter from '@/components/ProductCounter/ProductCounter';
import PagesQuantitySelect from '@/components/PagesQuantitySelect';
import { useSearchParams } from 'react-router-dom';

type Props = {
  category: string;
};

// eslint-disable @typescript-eslint/no-unused-vars

const ProductsPage: FC<Props> = ({ category }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(searchParams.get('perPage') || 16);

  console.log(setSearchParams, setCurrentPage);

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
      <PagesQuantitySelect onSelect={setPerPage} />
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
