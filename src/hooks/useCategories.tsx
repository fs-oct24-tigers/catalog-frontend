import { getCategories } from '@/api/apiProducts';
import { useEffect, useState } from 'react';

const UseCategories = () => {
  const [categories, setCategories] = useState<string[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const cats = await getCategories();

        setCategories(cats);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return { categories, isLoading, isError };
};

export default UseCategories;
