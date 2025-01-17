import { useState } from 'react';
import { Search } from 'lucide-react';

export const SearchProduct = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="flex flex-row-reverse items-center relative">
      <div className="h-16 flex justify-center items-center">
        <button
          onClick={handleSearchToggle}
          className="flex items-center justify-center w-16 h-16 hover:bg-lineGray border-r border-gray-700"
        >
          <Search size={20} />
        </button>
      </div>

      {isSearchOpen && (
        <div className="top-0 right-0 bg-gray-800 w-[300px] shadow-sm rounded-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full px-4 py-2 text-white bg-bodyBg rounded-md focus:outline-none focus:border-textWhite"
          />
        </div>
      )}
      {searchQuery.length > 3 && (
        <div className="absolute w-[500px] h-[500px] top-16 bg-gray-800"></div>
      )}
    </div>
  );
};
