import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Product } from '@/types';
import { Link } from 'react-router-dom';
import ProductButtons from './ProductButtons';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const hasDiscount = true;

  return (
    <Card className="w-[272px] flex flex-col space-y-2 p-8">
      <CardHeader className="flex flex-col items-center space-y-2 m-0 p-0">
        <CardTitle className="flex justify-center items-center m-0 p-0">
          <div className="w-[208px] h-[196px]">
            <Link to={product.id}>
              <img
                src={product.images[0]}
                alt="iPhone"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
        </CardTitle>

        <CardDescription className="m-0 p-0">
          <h2 className="w-[208px] text-sm font-semibold text-textWhite py-0">
            <Link to={product.id}>{product.name}</Link>
          </h2>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-start w-ful space-y-2 p-0 pb-2">
        <div className="flex items-center w-[208px] space-x-2">
          <p className="text-[22px] text-left font-extrabold text-textWhite">
            ${product.priceDiscount}
          </p>
          {hasDiscount && (
            <p className="text-[22px] text-left font-semibold text-textGray line-through">
              ${product.priceRegular}
            </p>
          )}
        </div>

        <div className="h-0.5 bg-lineGray w-[208px]" />

        <div className="flex justify-between items-center w-[208px]">
          <span className="text-xs font-bold text-textGray">Screen</span>
          <span className="text-xs font-bold text-textWhite">
            {product.screen}
          </span>
        </div>

        <div className="flex justify-between items-center w-[208px]">
          <span className="text-xs font-bold text-textGray">Capacity</span>
          <span className="text-xs font-bold text-textWhite">
            {product.capacity}
          </span>
        </div>

        <div className="flex justify-between items-center w-[208px]">
          <span className="text-xs font-bold text-textGray">RAM</span>
          <span className="text-xs font-bold text-textWhite">
            {product.ram}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex flex-1 justify-between items-center w-full p-0 m-0 space-x-2">
        <ProductButtons product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
