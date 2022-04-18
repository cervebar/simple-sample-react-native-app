import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemT } from '../../types/ItemT';
import { FavoriteItemMapT } from '../rootStateType';

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: [] as string[],
        data: {} as FavoriteItemMapT,
    },
    reducers: {
        addToFavorites: (state, action: PayloadAction<ItemT>) => {
            const item = action.payload;
            const dataValue = state.data[item.id];
            if (!dataValue) {
                state.data[item.id] = item;
                state.ids.push(item.id);
            } //else already there
        },
        removeFromFavorite: (state, action: PayloadAction<string>) => {
            const itemId = action.payload;
            delete state.data[itemId];
            const newIds = state.ids.filter(id => id != itemId);
            state.ids = newIds;
        },
    },
});

export const { addToFavorites, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
