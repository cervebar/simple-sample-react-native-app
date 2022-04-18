import React from 'react';
import { FlatList, Text } from 'react-native';
import { useFavorites } from '../hooks/selectors/useFavorites';
import { MovieItem } from './MovieItem';

export const FavoritesList = () => {
    const data = useFavorites();
    return (
        <>
            <Text>favorite count: {data.length}</Text>
            <FlatList data={data} keyExtractor={({ id }) => id} renderItem={({ item }) => <MovieItem data={item} />} />
        </>
    );
};
