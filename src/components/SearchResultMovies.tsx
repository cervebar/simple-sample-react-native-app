import React, { useContext, useState } from 'react';
import { ActivityIndicator, Button, FlatList, TextInput, View } from 'react-native';
import { FetchContext } from '../fetch/FetchProvider';
import { ItemT } from '../types/ItemT';
import { ListMovieItem } from './ListMovieItem';

export const SearchResultMovies = () => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<ItemT[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const { strategy } = useContext(FetchContext);

    const fetchData = async () => {
        try {
            const response = await strategy.fetchMovies(searchQuery, page);
            setData(response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const triggerSearch = async (searchQueryInput: string) => {
        if (searchQueryInput.length < 3) {
            return; // start fetching after first 3 characters
        }
        setPage(1); //reset to start
        setLoading(true);
        setSearchQuery(searchQueryInput);
        await fetchData();
    };

    const nextPage = async () => {
        // TODO max pages from fetchresult
        setPage(page + 1);
        await fetchData();
    };
    const prevPage = async () => {
        setPage(Math.max(1, page - 1));
        await fetchData();
    };

    return (
        <>
            <TextInput
                style={{ height: 40 }}
                placeholder="start searching your movie"
                onChangeText={text => {
                    triggerSearch(text);
                }}
            />
            {/*TODO prevent click when in boucdaries */}
            <Button title="Next page" onPress={nextPage} />
            <Button title="Prev page" onPress={prevPage} />
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
        </>
    );
};
