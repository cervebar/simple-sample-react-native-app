import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { FetchContext } from '../fetch/FetchProvider';
import { Item } from '../types/Item';
import { MovieItem } from './MovieItem';

export type SearchResultMoviesProps = {
    searchQuery: string;
};

export const SearchResultMovies = ({ searchQuery }: SearchResultMoviesProps) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Item[]>([]);
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
                    renderItem={({ item }) => <MovieItem data={item} />}
                />
            )}
        </View>
    );
};
