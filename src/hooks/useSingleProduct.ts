import { getProduct } from '@/api/apiProducts';
import { Product } from '@/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useSingleProduct = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        if (!id) {
          throw new Error('Product ID is undefined');
        }
        const products = await getProduct(id);

        setProduct(products);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return {
    product,
    isLoading,
    isError,
  };
};

export default useSingleProduct;
