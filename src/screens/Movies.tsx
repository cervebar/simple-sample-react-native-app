import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { FetchContext } from '../fetch/FetchProvider';
import { Item } from '../types/Item';

export const Movies = () => {
    const [isLoading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('dog');
    const [data, setData] = useState<Item[]>([]);
    const { strategy } = useContext(FetchContext);

    const getMovies = async () => {
        try {
            const response = await strategy.fetchMovies(searchQuery);
            setData(response);
            console.log('rsponse', response);
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
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>
                            {item.title}, {item.rating}, , {item.description}
                        </Text>
                    )}
                />
            )}
        </View>
    );
};
