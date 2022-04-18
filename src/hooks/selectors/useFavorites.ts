import { ItemT } from '../../types/ItemT';
import useMyState from './useMyState';
import { useMemo } from 'react';

export function useFavorites(): ItemT[] {
    const favoriteData = useMyState(state => state.favorite);
    const result = useMemo((): ItemT[] => {
        return Object.keys(favoriteData.data).map(function (k) {
            return favoriteData.data[k];
        });
    }, [favoriteData]);
    return result;
}
