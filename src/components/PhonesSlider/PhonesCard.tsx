import React, { useState } from 'react';
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
import { Phone } from '@/types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type Props = {
  phone: Phone;
  isNew?: boolean;
};

const PhonesCard: React.FC<Props> = ({ phone, isNew = false }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const price = phone.price || 0;
  const fullPrice = phone.fullPrice || 0;
  const hasDiscount = price < fullPrice && !isNew;

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card className="w-[272px] flex flex-col space-y-2 p-8">
      <CardHeader className="flex flex-col items-center space-y-2 m-0 p-0">
        <CardTitle className="flex justify-center items-center m-0 p-0">
          <div className="w-[208px] h-[196px]">
            <Link to={`/phones/${phone.itemId}`}>
              <img
                src={phone.image || '/images/fallback-image.png'}
                alt={phone.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    '/images/fallback-image.png';
                }}
              />
            </Link>
          </div>
        </CardTitle>

        <CardDescription>
          <h2 className="w-[208px] text-sm font-semibold text-textWhite">
            <Link to={`/phones/${phone.itemId}`}>{phone.name}</Link>
          </h2>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-start w-ful space-y-2 pb-2">
        <div className="flex items-center w-[208px] space-x-2">
          <p className="text-[22px] text-left font-extrabold text-textWhite">
            ${price.toFixed(2)}
          </p>
          {hasDiscount && (
            <p className="text-[22px] text-left font-semibold text-textGray line-through">
              ${fullPrice.toFixed(2)}
            </p>
          )}
        </div>

        <div className="h-0.5 bg-lineGray w-[208px]" />

        <div className="flex justify-between items-center w-[208px]">
          <span className="text-xs font-bold text-textGray">Screen</span>
          <span className="text-xs font-bold text-textWhite">
            {phone.screen || 'N/A'}
          </span>
        </div>

        <div className="flex justify-between items-center w-[208px]">
          <span className="text-xs font-bold text-textGray">Capacity</span>
          <span className="text-xs font-bold text-textWhite">
            {phone.capacity || 'N/A'}
          </span>
        </div>

        <div className="flex justify-between items-center w-[208px]">
          <span className="text-xs font-bold text-textGray">RAM</span>
          <span className="text-xs font-bold text-textWhite">
            {phone.ram || 'N/A'}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex flex-1 justify-between items-center w-full p-0 m-0 space-x-2">
        <Button className="text-sm font-bold text-textWhite flex-grow">
          Add to cart
        </Button>

        <div
          role="button"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          className={`w-10 h-10 flex items-center justify-center ${
            isFavorite ?
              'bg-transparent border border-heartHover'
            : 'bg-heartGray border border-transparent hover:bg-heartHover'
          }`}
          onClick={toggleFavorite}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Heart
              style={{
                width: '17px',
                height: '15px',
                fill: isFavorite ? 'red' : '',
                stroke: isFavorite ? 'none' : '',
              }}
            />
          </motion.div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PhonesCard;
