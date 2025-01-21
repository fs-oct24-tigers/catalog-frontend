import { getSearchProducts } from '@/api/apiProducts';
import { Product } from '@/types';
import { debounce } from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const useProductSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [products, setProducts] = useState<Product[]>();
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setInputValue('');
    setSearchQuery('');
  };

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      setSearchQuery(query);
    }, 300),
    [],
  );

  useEffect(() => {
    debouncedSearch(inputValue);

    return () => debouncedSearch.cancel();
  }, [inputValue, debouncedSearch]);

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      if (!searchQuery) {
        setProducts([]);
        return;
      }

      try {
        const fetchedProducts = await getSearchProducts(searchQuery);
        setProducts(fetchedProducts);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        handleSearchClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    isSearchOpen,
    searchRef,
    handleSearchToggle,
    handleSearchClose,
    handleSearchQuery,
    inputValue,
    products,
    isLoading,
  };
};

export default useProductSearch;
