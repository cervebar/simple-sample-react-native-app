import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../types/Item';

const selectedSlice = createSlice({
    name: 'selected',
    initialState: {
        favorites: [] as Item[],
    },
    reducers: {
        setSelectedItem(state, action: PayloadAction<Item>) {
            state.favorites.push(action.payload);
        },
    },
});

export const { setSelectedItem } = selectedSlice.actions;
export default selectedSlice.reducer;
