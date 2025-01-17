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

interface PurchaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const toastConfig = {
  position: 'top-right' as const,
  autoClose: 3000,
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

  const totalPrice = cartProducts.reduce(
    (acc, product) =>
      acc + (product.priceDiscount || product.priceRegular) * product.quantity,
    0,
  );

  const totalItems = cartProducts.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );

  const handleCheckout = () => {
    toast.dismiss();
    if (totalItems === 0) {
      toast.error('Your cart is empty!', {
        ...toastConfig,
        toastId: 'cart-empty',
      });
    } else {
      toast.success('Your order has been successfully placed!', {
        ...toastConfig,
        toastId: 'order-success',
      });
      dispatch(clearCart());
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] md:max-w-[700px] bg-cardBg border-cardBg">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl text-center">
            Complete your purchase
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white text-lg sm:text-xl">
                  Product
                </TableHead>
                <TableHead className="text-white text-lg sm:text-xl">
                  Quantity
                </TableHead>
                <TableHead className="text-white text-lg sm:text-xl">
                  Price
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="text-base sm:text-lg">
                    {product.name}
                  </TableCell>
                  <TableCell className="text-base sm:text-lg">
                    {product.quantity}
                  </TableCell>
                  <TableCell className="text-base sm:text-lg">
                    $
                    {(product.priceDiscount || product.priceRegular).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-end mt-6 text-lg sm:text-xl">
            <span>Total Price: ${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              className="bg-btnPrimary hover:bg-btnHover text-white px-6 sm:px-8 text-base sm:text-lg"
              onClick={handleCheckout}
            >
              Confirm
            </Button>
            <Button
              className="bg-btnPrimary hover:bg-btnHover text-white px-6 sm:px-8 text-base sm:text-lg"
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
