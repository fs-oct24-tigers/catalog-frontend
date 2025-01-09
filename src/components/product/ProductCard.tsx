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

const ProductCard: React.FC = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <Card className="w-[272px] flex flex-col space-y-2 p-8">
      <CardHeader className="flex flex-col items-center space-y-2 m-0 p-0">
        <CardTitle className="flex justify-center items-center m-0 p-0">
          <div className="w-[208px] h-[196px]">
            <img
              src="/img/phones/apple-iphone-11/green/00.webp"
              alt="iPhone"
              className="w-full h-full object-contain"
            />
          </div>
        </CardTitle>

        <CardDescription className="m-0 p-0">
          <h2 className="w-[208px] text-sm font-semibold text-textWhite py-0">
            Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)
          </h2>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-start w-ful space-y-2 p-0 pb-2">
        <p className="text-[22px] text-left w-[208px] font-extrabold text-textWhite">
          $999
        </p>
        <div className="h-0.5 bg-lineGray w-[208px]" />

        <div className="flex justify-between items-center w-[208px]">
          <span className="text-xs font-bold text-textGray">Screen</span>
          <span className="text-xs font-bold text-textWhite">6.1” OLED</span>
        </div>

        <div className="flex justify-between items-center w-[208px]">
          <span className="text-xs font-bold text-textGray">Capacity</span>
          <span className="text-xs font-bold text-textWhite">128 GB</span>
        </div>

        <div className="flex justify-between items-center w-[208px]">
          <span className="text-xs font-bold text-textGray">RAM</span>
          <span className="text-xs font-bold text-textWhite">6 GB</span>
        </div>
      </CardContent>

      <CardFooter className="flex flex-1 justify-between items-center w-full p-0 m-0">
        <Button
          size="custom"
          className="text-sm font-bold text-textWhite"
        >
          Add to cart
        </Button>
        {/*<Button variant="secondary">Button</Button>*/}
        <div
          className={`w-10 h-10 flex items-center justify-center hover:bg-heartHover ${
            selected ?
              'bg-transparent border border-heartHover'
            : 'bg-heartHover border border-transparent'
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
