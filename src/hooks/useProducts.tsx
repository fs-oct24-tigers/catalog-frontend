import React from 'react';

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const useProducts: React.FC<Props> = ({ children, title }) => {
  return (
    <div>
      <h1>{title || 'Default Title'}</h1>
      {children}
    </div>
  );
};

export default useProducts;
