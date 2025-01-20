import { Product } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Product[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const existProduct = state.find(
        (product) => product.itemId === action.payload.itemId,
      );

      if (existProduct) {
        return state.filter(
          (product) => product.itemId !== action.payload.itemId,
        );
      }

      state.push(action.payload);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
