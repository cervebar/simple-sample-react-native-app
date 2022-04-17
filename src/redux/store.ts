import { combineReducers, configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import messageReducer from './message';
import favoriteReducer from './favorites';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
    message: messageReducer,
    favorite: favoriteReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray(), //TODO .concat(middleware)
});
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
