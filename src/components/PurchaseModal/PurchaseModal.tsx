import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { clearCart } from '@/features/cart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/css/index.css';
import { SignInButton, useAuth } from '@clerk/clerk-react';
import { useOrders } from '@/hooks/useOrders';

interface PurchaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const toastConfig = {
  position: 'top-right' as const,
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
};

export function PurchaseModal({ open, onOpenChange }: PurchaseModalProps) {
  const cartProducts = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const { isSignedIn } = useAuth();
  const { createOrder } = useOrders();

  const totalPrice = cartProducts.reduce(
    (acc, product) =>
      acc + (product.priceDiscount || product.priceRegular) * product.quantity,
    0,
  );

  const totalItems = cartProducts.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );

  const handlePurchase = async () => {
    toast.dismiss();
    if (totalItems === 0) {
      toast.error('Your cart is empty!', {
        ...toastConfig,
        toastId: 'cart-empty',
      });
      return;
    }

    try {
      await createOrder(cartProducts, totalPrice);

      toast.success('Your order has been successfully placed!', {
        ...toastConfig,
        toastId: 'order-success',
      });

      dispatch(clearCart());
      onOpenChange(false);
    } catch (error) {
      toast.error('Failed to place order. Please try again.', {
        ...toastConfig,
        toastId: 'order-error',
      });
      console.error('Order creation failed:', error);
    }
  };

  const handleSignInClick = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] md:max-w-[700px] dark:bg-cardBg border-cardBg z-50">
        <DialogHeader>
          <DialogTitle className="text-slate-950 dark:text-textWhite text-xl sm:text-2xl text-center">
            Complete your purchase
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <div className="overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow className="bg-slate-300 dark:bg-gray-800">
                  <TableHead className="text-slate-950 dark:text-textWhite text-lg sm:text-xl px-4 py-2">
                    Product
                  </TableHead>
                  <TableHead className="text-slate-950 dark:text-textWhite text-lg sm:text-xl px-4 py-2">
                    Quantity
                  </TableHead>
                  <TableHead className="text-slate-950 dark:text-textWhite text-lg sm:text-xl px-4 py-2">
                    Price
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cartProducts.map((product, index) => (
                  <TableRow
                    key={product.itemId}
                    className={`${
                      index % 2 === 0 ?
                        'bg-slate-100 dark:bg-gray-700'
                      : 'bg-slate-200 dark:bg-gray-600'
                    } hover:bg-slate-400 dark:hover:bg-gray-500 transition-colors`}
                  >
                    <TableCell className="text-slate-950 dark:text-textWhite text-base sm:text-lg px-4 py-2">
                      {product.name}
                    </TableCell>
                    <TableCell className="text-slate-950 dark:text-textWhite text-base sm:text-lg px-4 py-2">
                      {product.quantity}
                    </TableCell>
                    <TableCell className="text-slate-950 dark:text-textWhite text-base sm:text-lg px-4 py-2">
                      $
                      {(product.priceDiscount || product.priceRegular).toFixed(
                        2,
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="text-slate-950 dark:text-textWhite flex justify-end mt-6 text-lg sm:text-xl">
            <span>Total Price: ${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            {isSignedIn ?
              <Button
                className="bg-btnPrimary hover:bg-btnHover text-textWhite px-6 sm:px-8 text-base sm:text-lg"
                onClick={handlePurchase}
              >
                Purchase
              </Button>
            : <SignInButton mode="modal">
                <Button
                  className="bg-btnPrimary hover:bg-btnHover text-textWhite px-6 sm:px-8 text-base sm:text-lg"
                  onClick={handleSignInClick}
                >
                  Sign in to Checkout
                </Button>
              </SignInButton>
            }
            <Button
              className="bg-btnPrimary hover:bg-btnHover text-textWhite px-6 sm:px-8 text-base sm:text-lg"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
