import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '../features/cart';
import { favoritesSlice } from '@/features/favorites';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { perPageSlice } from '@/features/perPage';
import { sortingSlice } from '@/features/sorting';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'favorites', 'perPage', 'sorting'],
};

const rootReducer = combineSlices({
  cart: cartSlice.reducer,
  favorites: favoritesSlice.reducer,
  perPage: perPageSlice.reducer,
  sorting: sortingSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
