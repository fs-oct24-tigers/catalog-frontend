import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ProductGrid: React.FC<Props> = ({ children }) => {
  return (
    <div className="m-auto grid gap-x-4 gap-y-10 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center place-items-center">
      {children}
    </div>
  );
};

export default ProductGrid;
