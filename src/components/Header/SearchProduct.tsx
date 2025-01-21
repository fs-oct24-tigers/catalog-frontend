import { useCallback, useEffect, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';

import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { getSearchProducts } from '@/api/apiProducts';
import { Product } from '@/types';
import { SUPABASE_STORAGE_URL } from '@/constants/auth';

export const SearchProduct = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>();

  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setInputValue('');
    setSearchQuery('');
  };

  const debouncedSetSearchQuery = useCallback(
    debounce((query: string) => setSearchQuery(query), 300),
    [],
  );

  useEffect(() => {
    debouncedSetSearchQuery(inputValue);
    return () => debouncedSetSearchQuery.cancel();
  }, [inputValue, debouncedSetSearchQuery]);

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getSearchProducts(searchQuery);

        setProducts(products);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
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

  return (
    <div ref={searchRef} className="flex flex-row-reverse items-center">
      <div className=" flex justify-center items-center">
        <button
          onClick={handleSearchToggle}
          className="flex items-center justify-center size-12 dark:hover:bg-lineGray dark:border-gray-700"
        >
          <Search size={20} className="text-slate-950 dark:text-textWhite" />
        </button>
      </div>

      {isSearchOpen && (
        <div className="flex items-center top-[48px] md:top-0 right-0 left-0 w-full md:w-[300px] absolute sm:relative border-b-[1px] border-gray-700  md:border-0 m-auto">
          <input
            type="text"
            value={inputValue}
            onChange={handleSearchQuery}
            placeholder="Search products..."
            className="w-full px-4 py-2 text-slate-600 dark:text-white dark:bg-bodyBg focus:outline-none dark:focus:border-textWhite"
          />
          {!!inputValue.length && (
            <div className="cursor-pointer px-2" onClick={handleSearchClose}>
              <X size={20} />
            </div>
          )}
        </div>
      )}
      {inputValue.length > 3 && (
        <div className="absolute w-full right-0 left-0 md:left-auto md:right-36 md:w-[500px] h-[300px] top-[89px] md:top-12 p-2 border-2 dark:border-0 dark:bg-gray-800 overflow-y-scroll m-auto md:m-0 custom-scrollbar">
          {products &&
            products.map((product) => (
              <div
                key={product.itemId}
                className="flex items-center p-2 m-2 border-2 hover:border-slate-300 dark:border-0 dark:bg-bodyBg dark:hover:bg-gray-600"
              >
                <Link
                  onClick={handleSearchClose}
                  to={`/${product.category}/${product.itemId}`}
                  className="flex items-center text-slate-900 dark:text-textWhite"
                >
                  <img
                    src={`${SUPABASE_STORAGE_URL}/${product.images[0]}`}
                    alt={product.name}
                    className="w-12 h-12"
                  />
                  <p>{product.name}</p>
                </Link>
              </div>
            ))}
        </div>
      )}

      {inputValue.length > 2 && products?.length === 0 && (
        <div className="absolute p-4 w-[500px] h-[50px] top-16 text-slate-950 dark:text-textWhite dark:bg-gray-800">
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};
