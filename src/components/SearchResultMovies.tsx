import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { FetchContext } from '../fetch/FetchProvider';
import { ItemT } from '../types/ItemT';
import { ListMovieItem } from './ListMovieItem';

export type SearchResultMoviesProps = {
    searchQuery: string;
};

export const SearchResultMovies = ({ searchQuery }: SearchResultMoviesProps) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<ItemT[]>([]);
    const { strategy } = useContext(FetchContext);

    const getMovies = async () => {
        try {
            const response = await strategy.fetchMovies(searchQuery);
            setData(response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => <ListMovieItem data={item} />}
                />
            )}
        </View>
    );
};
