import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemT } from '../../types/ItemT';

const selectedSlice = createSlice({
    name: 'selected',
    initialState: {
        favorites: [] as ItemT[],
    },
    reducers: {
        setSelectedItem(state, action: PayloadAction<ItemT>) {
            state.favorites.push(action.payload);
        },
    },
});

export const { setSelectedItem } = selectedSlice.actions;
export default selectedSlice.reducer;
