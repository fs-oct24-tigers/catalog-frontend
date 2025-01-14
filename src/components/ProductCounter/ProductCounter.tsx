import { FC } from 'react';

type ProductCounterProps = {
  count: number;
};

const ProductCounter: FC<ProductCounterProps> = ({ count }) => {
  return (
    <div className="text-sm text-gray-600 mb-8">
      {count} {count === 1 ? 'model' : 'models'}
    </div>
  );
};

export default ProductCounter;
