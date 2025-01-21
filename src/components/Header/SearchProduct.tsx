import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SUPABASE_STORAGE_URL } from '@/constants/auth';
import useProductSearch from '@/hooks/useProductSearch';

export const SearchProduct = () => {
  const {
    isSearchOpen,
    searchRef,
    handleSearchToggle,
    handleSearchClose,
    handleSearchQuery,
    inputValue,
    products,
    isLoading,
  } = useProductSearch();

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
            className="w-full px-4 py-2 text-slate-600 dark:text-white dark:bg-bodyBg focus:outline-none dark:focus:border-textWhite text-xs"
          />
          {!!inputValue.length && (
            <div className="cursor-pointer px-2" onClick={handleSearchClose}>
              <X size={20} />
            </div>
          )}
        </div>
      )}
      {isSearchOpen && inputValue.length > 3 && (products?.length ?? 0) > 0 && (
        <div className="absolute flex flex-col gap-2 w-full right-0 left-0 md:left-auto md:right-36 md:w-[352px] h-[300px] top-[89px] md:top-12 p-2 border-2 dark:border-0 bg-gray-100 dark:bg-gray-800 overflow-y-scroll m-auto md:m-0 custom-scrollbar dark:custom-scrollbar-dark">
          {products &&
            products.map((product) => (
              <Link
                key={product.itemId}
                onClick={handleSearchClose}
                to={`/${product.category}/${product.itemId}`}
                className="flex items-center justify-start gap-4 dark:text-textWhite p-2 border-2 hover:border-slate-300 dark:border-0 dark:bg-bodyBg dark:hover:bg-gray-600"
              >
                <img
                  src={`${SUPABASE_STORAGE_URL}/${product.images[0]}`}
                  alt={product.name}
                  className="w-10"
                />
                <p className="text-sm text-gray-800 dark:text-white">
                  {product.name}
                </p>
              </Link>
            ))}
        </div>
      )}

      {isSearchOpen &&
        inputValue.length > 2 &&
        products?.length === 0 &&
        !isLoading && (
          <div className="absolute p-4 w-full right-0 left-0 md:left-auto md:right-36 md:w-[352px] h-[50px] top-[89px] md:top-12 text-slate-950 dark:text-textWhite dark:bg-gray-800">
            <p className="text-sm">No products found</p>
          </div>
        )}
    </div>
  );
};
