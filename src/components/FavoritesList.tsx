import React from 'react';
import { FlatList, Text } from 'react-native';
import { useFavorites } from '../hooks/selectors/useFavorites';
import { ListMovieItem } from './ListMovieItem';

export const FavoritesList = () => {
    const data = useFavorites();
    return (
        <>
            <Text>favorite count: {data.length}</Text>
            <FlatList
                data={data}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => <ListMovieItem data={item} />}
            />
        </>
    );
};
