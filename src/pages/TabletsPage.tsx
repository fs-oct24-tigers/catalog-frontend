import { fetchProducts } from '@/api/fetchProducts';
import ProductCard from '@/components/product/ProductCard';
import ProductGrid from '@/components/product/ProductGrid';
import { Phone } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

const TabletsPage: FC = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Phone[]>({
    queryKey: ['tablets'],
    queryFn: () => fetchProducts('/api/tablets.json'),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : 'An error occurred'}
      </div>
    );
  }

  return (
    <div>
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

export default TabletsPage;
