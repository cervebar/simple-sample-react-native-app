import { combineReducers, configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import messageReducer from './slices/message';
import favoriteReducer from './slices/favorites';
import selectedReducer from './slices/selected';

import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
const rootReducer = combineReducers({
    message: messageReducer,
    favorite: favoriteReducer,
    selected: selectedReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['favorite', 'message'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: new MiddlewareArray(), //TODO .concat(middleware)
});
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export const persistor = persistStore(store);
