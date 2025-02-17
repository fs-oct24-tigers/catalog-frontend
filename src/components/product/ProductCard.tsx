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
import { SUPABASE_STORAGE_URL } from '@/constants/auth';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const hasDiscount = true;

  return (
    <Card className="w-full max-w-[290px] flex flex-col space-y-2 p-8 shadow-md self-center justify-center items-center h-full border-2 hover:border-slate-300 dark:hover:border-lineGray">
      <CardHeader className="flex flex-col items-center space-y-2 m-0 p-0">
        <CardTitle className="flex justify-center items-center m-0 p-0">
          <div className="w-[200px] h-[196px]">
            <Link to={`/${product.category}/${product.itemId}`}>
              <img
                src={`${SUPABASE_STORAGE_URL}/${product.images[0]}`}
                alt="iPhone"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
        </CardTitle>

        <CardDescription
          className="m-0 p-0 flex items-center"
          style={{ height: '48px' }}
        >
          <h2 className="w-[224px] text-sm font-semibold text-slate-950 dark:text-textWhite py-0">
            <Link to={`/${product.category}/${product.itemId}`}>
              {product.name}
            </Link>
          </h2>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-start w-full space-y-2 p-0 pb-2">
        <div className="flex items-center w-[224px] space-x-2">
          <p className="text-[22px] text-left font-extrabold text-slate-950 dark:text-textWhite">
            ${product.priceDiscount}
          </p>
          {hasDiscount && (
            <p className="text-[22px] text-left font-semibold text-textGray line-through">
              ${product.priceRegular}
            </p>
          )}
        </div>

        <div className="h-0.5 bg-lineGray w-[224px]" />

        <div className="flex justify-between items-center w-[224px]">
          <span className="text-xs font-bold text-textGray">Screen</span>
          <span className="text-xs font-bold text-slate-950 dark:text-textWhite">
            {product.screen}
          </span>
        </div>

        <div className="flex justify-between items-center w-[224px]">
          <span className="text-xs font-bold text-textGray">Capacity</span>
          <span className="text-xs font-bold dark:text-textWhite">
            {product.capacity}
          </span>
        </div>

        <div className="flex justify-between items-center w-[224px]">
          <span className="text-xs font-bold text-textGray">RAM</span>
          <span className="text-xs font-bold text-slate-950 dark:text-textWhite">
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
