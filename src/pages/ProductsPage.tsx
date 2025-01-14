import { get } from '@/api/fetchProducts';
import ProductCard from '@/components/product/ProductCard';
import ProductGrid from '@/components/product/ProductGrid';
import { Product } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { Breadcrumbs } from '@/components/BreadCrumbs';

type Props = {
  category: string;
};

const ProductsPage: FC<Props> = ({ category }) => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: [category],
    queryFn: () => get(`/api/${category}.json`),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <div>
      <Breadcrumbs category={category} />
      <h1>Products Page</h1>
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
