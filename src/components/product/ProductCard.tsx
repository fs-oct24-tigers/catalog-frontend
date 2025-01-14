import React from 'react';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import { Product } from '@/types';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const [selected, setSelected] = useState(false);

  const hasDiscount = true;

  const handleClick = () => {
    setSelected(!selected);
  };
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
        <Button className="text-sm font-bold text-textWhite flex-grow">
          Add to cart
        </Button>

        <div
          className={`w-10 h-10 flex items-center justify-center ${
            selected ?
              'bg-transparent border border-heartHover'
            : 'bg-heartGray border border-transparent hover:bg-heartHover'
          }`}
          onClick={handleClick}
        >
          <Heart
            style={{
              width: '17px',
              height: '15px',
              fill: selected ? 'red' : '',
              stroke: selected ? 'none' : '',
            }}
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
