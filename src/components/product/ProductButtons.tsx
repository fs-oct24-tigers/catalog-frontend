import { Product } from '@/types';
import React from 'react';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import { useAppSelector } from '@/app/hooks';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/cart';
import { toggleFavorite } from '@/features/favorites';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      toast.info('Product is already in the cart!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#111827',
        },
        toastId: 'product-in-cart',
      });
      return;
    }
    dispatch(addToCart(product));
    if (isInFavorites) {
      toast.info('Product added to cart!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#111827',
        },
        toastId: 'product-removed-favorites',
      });
    } else {
      toast.success('Product added to cart!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#111827',
        },
        toastId: 'product-added-cart',
      });
    }
  };

  const isInFavorites = favoriteProducts.some(
    (favoriteProduct) => favoriteProduct.id === product.id,
  );

  const handleToggleFavorites = () => {
    dispatch(toggleFavorite(product));
    if (isInFavorites) {
      toast.info('Product removed from favorites!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#111827',
        },
      });
    } else {
      toast.success('Product added to favorites!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#111827',
        },
      });
    }
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
