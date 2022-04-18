import { ItemT } from '../types/ItemT';

export type FavoriteItemMapT = Record<string, ItemT>;

export type RootStateType = {
    message: string;
    favorite: { ids: string[]; data: FavoriteItemMapT };
    selected: ItemT;
};
