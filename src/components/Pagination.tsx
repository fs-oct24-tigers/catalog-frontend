import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { ChevronRight, ChevronLeft } from 'lucide-react';

type Props = {
  currentPage: number;
  totalItems: number;
  perPage: number;
  handlePageChange: (selectedItem: { selected: number }) => void;
};

const Pagination: FC<Props> = ({
  currentPage,
  totalItems,
  perPage,
  handlePageChange,
}) => {
  const totalPages = Math.ceil(totalItems / perPage);

  return (
    <div className="pagination mt-10">
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => handlePageChange({ selected })}
        forcePage={currentPage - 1}
        previousLabel={
          <ChevronLeft
            size={16}
            className="text-slate-950 dark:text-textWhite"
          />
        }
        nextLabel={
          <ChevronRight
            size={16}
            className="text-slate-950 dark:text-textWhite"
          />
        }
        breakLabel="..."
        breakLinkClassName="text-slate-950 dark:text-textWhite"
        containerClassName="flex items-center justify-center space-x-2 mt-4"
        pageLinkClassName="flex items-center justify-center w-8 h-8 text-sm bg-cardBg dark:hover:bg-heartHover"
        activeLinkClassName="text-white bg-violet-500 hover:bg-btnHover"
        previousLinkClassName="flex items-center justify-center w-8 h-8 border-2 dark:border-0 dark:bg-btnSecondary dark:hover:bg-heartHover"
        nextLinkClassName="flex items-center justify-center w-8 h-8 border-2 dark:border-0 dark:bg-btnSecondary dark:hover:bg-heartHover"
        breakClassName="px-4 py-2"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
};

export default Pagination;
