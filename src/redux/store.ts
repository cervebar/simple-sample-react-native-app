import { combineReducers, configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import favoriteReducer from './slices/favorites';

import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  favorite: favoriteReducer,
//    ... any other reduces come here
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorite'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: new MiddlewareArray(), //here would come any middleware with concat()
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export const persistor = persistStore(store);
