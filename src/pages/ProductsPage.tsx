import ProductCard from '@/components/product/ProductCard';
import ProductGrid from '@/components/product/ProductGrid';
import { Phone } from '@/types';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';

const ProductsPage: FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('../../public/api/phones.json')
      .then((response) => {
        setPhones(response.data);
      })
      .catch((err) => {
        console.error('Error fetching the data:', err);
        setError('Failed to load data');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Products Page</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {!isLoading && !error && phones.length > 0 && (
        <ProductGrid>
          {phones.map((phone) => (
            <ProductCard key={phone.id} product={phone} />
          ))}
        </ProductGrid>
      )}
      {!isLoading && !error && phones.length === 0 && (
        <div>No products available</div>
      )}
    </div>
  );
};

export default ProductsPage;
