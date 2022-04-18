import useMyState from './useMyState';
import { useMemo } from 'react';

export function useIsFavorite(itemId: string): boolean {
    const favoriteIds = useMyState(state => state.favorite.ids);
    const result = useMemo((): boolean => {
        return favoriteIds.some(id => id === itemId);
    }, [favoriteIds, itemId]);
    return result;
}
