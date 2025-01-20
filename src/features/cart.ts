import { Product } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartProduct extends Product {
  itemId: string;
  name: string;
  priceRegular: number;
  priceDiscount: number;
  images: string[];
  quantity: number;
}

const initialState: CartProduct[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.find(
        (product) => product.itemId === action.payload.itemId,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((product) => product.itemId !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ itemId: string; operation: string }>,
    ) => {
      const productToUpdate = state.find(
        (product) => product.itemId === action.payload.itemId,
      );

      if (productToUpdate) {
        if (action.payload.operation === 'plus') {
          productToUpdate.quantity += 1;
        } else {
          productToUpdate.quantity -= 1;
        }
      }
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
