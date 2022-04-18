import { Item } from '../../types/Item';
import useMyState from './useMyState';

export function useFavorites(): Item[] {
    return useMyState(state => state.favorite);
}
