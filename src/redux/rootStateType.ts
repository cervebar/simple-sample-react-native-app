import { ItemT } from '../types/ItemT';

export type FavoriteItemMapT = Record<string, ItemT>;

export type RootStateType = {
    favorite: { ids: string[]; data: FavoriteItemMapT };
};
