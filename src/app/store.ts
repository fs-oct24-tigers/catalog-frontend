import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { cartSlice } from '../features/cart';

const rootReducer = combineSlices({
  cart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
