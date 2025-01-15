import { Product } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Product[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const existProduct = state.find(
        (product) => product.id === action.payload.id,
      );

      if (existProduct) {
        return state.filter((product) => product.id !== action.payload.id);
      }

      state.push(action.payload);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
