import { Item } from '../types/Item';

export type RootStateType = {
    message: string;
    favorite: Item[];
    selected: Item;
};
