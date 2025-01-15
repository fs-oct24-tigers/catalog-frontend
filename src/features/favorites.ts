import { Product } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartProduct = Product;

const initialState: CartProduct[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Product>) => {
      const existProduct = state.find(
        (product) => product.id === action.payload.id,
      );

      if (!existProduct) {
        state.push(action.payload);
      }
    },

    removeFromFavorites: (state, action: PayloadAction<string>) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
