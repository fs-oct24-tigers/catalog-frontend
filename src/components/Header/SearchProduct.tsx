import { useCallback, useEffect, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import useSearchQuery from '@/hooks/useSearchQuery';
import { categories } from '@/constants';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';

export const SearchProduct = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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

  const { products } = useSearchQuery({
    categories,
    searchQuery,
  });

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
    <div
      ref={searchRef}
      className="flex flex-row-reverse items-center relative"
    >
      <div className="h-16 flex justify-center items-center">
        <button
          onClick={handleSearchToggle}
          className="flex items-center justify-center w-16 h-16 dark:hover:bg-lineGray dark:border-gray-700"
        >
          <Search size={20} />
        </button>
      </div>

      {isSearchOpen && (
        <div className="flex items-center top-0 right-0  w-[300px] shadow-sm">
          <input
            type="text"
            value={inputValue}
            onChange={handleSearchQuery}
            placeholder="Search products..."
            className="w-full px-4 py-2 text-slate-600 dark:text-white dark:bg-bodyBg focus:outline-none dark:focus:border-textWhite"
          />
          {!!inputValue.length && (
            <div className="cursor-pointer" onClick={handleSearchClose}>
              <X size={20} />
            </div>
          )}
        </div>
      )}
      {inputValue.length > 3 && (
        <div className="absolute w-[500px] h-[300px] top-16 p-2 border-2 dark:border-0 dark:bg-gray-800 overflow-y-scroll">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center p-2 m-2 border-2 hover:border-slate-300 dark:border-0 dark:bg-bodyBg dark:hover:bg-gray-600"
            >
              <Link
                onClick={handleSearchClose}
                to={`/${product.category}/${product.id}`}
                className="flex items-center text-slate-900 dark:text-textWhite"
              >
                <img
                  src={`/${product.images[0]}`}
                  alt={product.name}
                  className="w-12 h-12"
                />
                <p>{product.name}</p>
              </Link>
            </div>
          ))}
        </div>
      )}

      {inputValue.length > 2 && products.length === 0 && (
        <div className="absolute p-4 w-[500px] h-[50px] top-16 text-slate-950 dark:text-textWhite dark:bg-gray-800">
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};
