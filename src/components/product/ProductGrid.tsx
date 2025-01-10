import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ProductGrid: React.FC<Props> = ({ children }) => {
  return (
    <div className="m-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-x-4 gap-y-10 place-content-center place-items-center">
      {children}
    </div>
  );
};

export default ProductGrid;
