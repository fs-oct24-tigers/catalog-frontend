import { Product } from '@/types';
import React from 'react';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import { useAppSelector } from '@/app/hooks';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/cart';

type Props = {
  product: Product;
};

const ProductButtons: React.FC<Props> = ({ product }) => {
  const cartProducts = useAppSelector((state) => state.cart);

  const isInCart = cartProducts.some(
    (cartProduct) => cartProduct.id === product.id,
  );
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (isInCart) {
      return;
    }
    dispatch(addToCart(product));
  };
  return (
    <>
      <Button
        variant={isInCart ? 'secondary' : 'default'}
        onClick={handleAddToCart}
        className="text-sm font-bold text-textWhite flex-grow text-left"
      >
        {isInCart ? 'Added to cart' : 'Add to cart'}
      </Button>

      <div
        className={`w-10 h-10 flex items-center justify-center ${
          isInCart ?
            'bg-transparent border border-heartHover'
          : 'bg-heartGray border border-transparent hover:bg-heartHover'
        }`}
      >
        <Heart
          style={{
            width: '17px',
            height: '15px',
            fill: isInCart ? 'red' : '',
            stroke: isInCart ? 'none' : '',
          }}
        />
      </div>
    </>
  );
};

export default ProductButtons;
