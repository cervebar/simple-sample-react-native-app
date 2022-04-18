import React from 'react';
import { FlatList } from 'react-native';
import { useFavorites } from '../hooks/selectors/useFavorites';
import { ListMovieItem } from './ListMovieItem';
import { MyText } from './MyText';

export const FavoritesList = () => {
    const data = useFavorites();
    return (
        <>
            <MyText>Total in favorites: {data.length}</MyText>
            <FlatList
                data={data}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => <ListMovieItem data={item} />}
            />
        </>
    );
};
