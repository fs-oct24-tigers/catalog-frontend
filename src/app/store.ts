import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { cartSlice } from '../features/cart';
import { favoritesSlice } from '@/features/favorites';

const rootReducer = combineSlices({
  cart: cartSlice.reducer,
  favorites: favoritesSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
