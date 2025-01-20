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
    toast.dismiss();
    if (isInCart) {
      toast.info('Product is already in the cart!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#161827',
        },
        className: 'custom-toast',
        toastId: 'product-in-cart',
      });
      return;
    }
    dispatch(addToCart(product));
    if (isInFavorites) {
      toast.info('Product added to cart!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#161827',
        },
        className: 'custom-toast',
        toastId: 'product-removed-favorites',
      });
    } else {
      toast.success('Product added to cart!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#161827',
        },
        // className: 'custom-toast',
        toastId: 'product-added-cart',
      });
    }
  };

  const isInFavorites = favoriteProducts.some(
    (favoriteProduct) => favoriteProduct.id === product.id,
  );

  const handleToggleFavorites = () => {
    toast.dismiss();
    dispatch(toggleFavorite(product));
    if (isInFavorites) {
      toast.info('Product removed from favorites!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#161827',
        },
        className: 'custom-toast',
      });
    } else {
      toast.success('Product added to favorites!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#161827',
        },
        // className: 'custom-toast',
      });
    }
  };
  return (
    <>
      <Button
        variant={isInCart ? 'secondary' : 'default'}
        onClick={handleAddToCart}
        className={
          isInCart ?
            'text-sm font-bold hover:border-slate-300 text-slate-950 border-2 dark:border-0 flex-grow text-left'
          : 'text-sm font-bold hover:border-slate-300 text-textWhite border-0 flex-grow text-left'
        }
      >
        {isInCart ? 'Added to cart' : 'Add to cart'}
      </Button>

      <div
        className={`w-10 h-10 flex items-center justify-center ${
          isInFavorites ?
            'bg-transparent border-2 hover:border-slate-300 dark:border-heartHover'
          : 'dark:bg-heartGray border-2 hover:border-slate-300 dark:border-transparent dark:hover:bg-heartHover'
        }`}
        onClick={handleToggleFavorites}
      >
        <Heart
          style={{
            width: '17px',
            height: '15px',
            cursor: 'pointer',
            fill: isInFavorites ? 'red' : '',
            stroke: isInFavorites ? 'none' : '',
          }}
          className="text-slate-950 dark:text-textWhite"
        />
      </div>
    </>
  );
};

export default ProductButtons;
