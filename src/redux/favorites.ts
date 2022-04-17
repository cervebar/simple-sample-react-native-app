import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../types/Item';

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [] as Item[],
    },
    reducers: {
        addToFavorite(state, action: PayloadAction<Item>) {
            state.favorites.push(action.payload);
        },
        removeFromFavorite(state) {
            //TODO remove logic
            state.favorites;
        },
    },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
