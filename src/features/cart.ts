import { Product } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartProduct extends Product {
  quantity: number;
}

const initialState: CartProduct[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((product) => product.id !== action.payload);
    },
    // updateQuantity: (
    //   state,
    //   action: PayloadAction<{ id: string; quantity: number }>,
    // ) => {
    //   const productToUpdate = state.find(
    //     (product) => product.id === action.payload.id,
    //   );

    //   if (productToUpdate) {
    //     // Update the quantity if the product exists
    //     productToUpdate.quantity = action.payload.quantity;
    //   }
    // },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
