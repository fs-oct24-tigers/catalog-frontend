import { Product } from '@/types';
import React from 'react';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import { useAppSelector } from '@/app/hooks';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/cart';
import { toggleFavorite } from '@/features/favorites';

type Props = {
  product: Product;
};

const ProductButtons: React.FC<Props> = ({ product }) => {
  const cartProducts = useAppSelector((state) => state.cart);
  const favoriteProducts = useAppSelector((state) => state.favorites);

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

  const isInFavorites = favoriteProducts.some(
    (favoriteProduct) => favoriteProduct.id === product.id,
  );

  const handleToggleFavorites = () => {
    dispatch(toggleFavorite(product));
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
          isInFavorites ?
            'bg-transparent border border-heartHover'
          : 'bg-heartGray border border-transparent hover:bg-heartHover'
        }`}
        onClick={handleToggleFavorites}
      >
        <Heart
          style={{
            width: '17px',
            height: '15px',
            fill: isInFavorites ? 'red' : '',
            stroke: isInFavorites ? 'none' : '',
          }}
        />
      </div>
    </>
  );
};

export default ProductButtons;
