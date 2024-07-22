// src/presentation/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import { pokemonApi } from '../../infrastructure/api/PokemonApi';

const store = configureStore({
  reducer: {
    search: searchReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
