import { useAppDispatch } from '@/app/hooks';
import {
  removeFromCart,
  updateQuantity,
  type CartProduct,
} from '@/features/cart';
import { Minus, Plus, X } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  product: CartProduct;
};

const CartProduct: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  const deleteFromCart = () => {
    dispatch(removeFromCart(product.id));
    toast.success('Product removed from cart!', {
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
      toastId: `removed-${product.id}`,
    });
  };

  const handleIncrement = () => {
    if (product.quantity > 100) {
      return;
    }
    dispatch(updateQuantity({ id: product.id, operation: 'plus' }));
  };

  const handleDecrement = () => {
    if (product.quantity === 1) {
      return;
    }
    dispatch(updateQuantity({ id: product.id, operation: 'minus' }));
  };

  const totalPrice =
    product.quantity * product.priceDiscount || product.priceRegular;

  return (
    <div className="w-full bg-cardBg p-4 flex items-center sm:flex-row flex-col">
      <div className="flex items-center w-full">
        <button
          onClick={deleteFromCart}
          className="bg-gray-700 p-2 hover:bg-gray-600 mr-4"
        >
          <X size={16} />
        </button>

        <Link to={`/${product.category}/${product.id}`}>
          <div className="flex justify-center w-[80px] h-[80px]">
            <img className="h-[80px]" src={product.images[0]} alt="iphone" />
          </div>
        </Link>

        <Link to={`/${product.category}/${product.id}`} className="flex-1">
          <p className="text-lg">{product.name}</p>
        </Link>
      </div>

      <div className="flex items-center sm:mt-0 mt-4 sm:justify-end justify-between w-full ">
        <div className="flex items-center ">
          <button
            onClick={handleDecrement}
            disabled={product.quantity === 1}
            className={cn('w-8 h-8 flex items-center justify-center', {
              'bg-gray-700 hover:bg-gray-600 cursor-pointer':
                product.quantity > 1,
              'bg-gray-800 cursor-default': product.quantity === 1,
            })}
          >
            <Minus size={16} />
          </button>
          <div className="mx-4 w-[32px] text-center">{product.quantity}</div>
          <button
            onClick={handleIncrement}
            className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600"
          >
            <Plus size={16} />
          </button>
        </div>

        <div className="w-[60px] ml-8 text-xl font-bold">${totalPrice}</div>
      </div>
    </div>
  );
};

export default CartProduct;
