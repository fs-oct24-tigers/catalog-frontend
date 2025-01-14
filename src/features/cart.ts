import { Product } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Product[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      if (state.find((product) => product.id === action.payload.id)) {
        return state;
      }
      return state.concat(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
