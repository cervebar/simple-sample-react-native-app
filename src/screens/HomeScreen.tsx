import { View, Text, Button } from 'react-native';
import React, { FC, useState } from 'react';
import { SearchResultMovies } from '../components/SearchResultMovies';
import { FavoritesList } from '../components/FavoritesList';

export const HomeScreen: FC = () => {
    const [isFavoritesVisible, setIsFavoritesVisible] = useState<boolean>(true);
    const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);

    const showFavorites = () => {
        setIsFavoritesVisible(true);
        setIsSearchVisible(false);
    };
    const showSearch = () => {
        setIsFavoritesVisible(false);
        setIsSearchVisible(true);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Show favourites" onPress={showFavorites} />
            <Button title="Search" onPress={showSearch} />
            {isSearchVisible && <SearchResultMovies searchQuery={'dog'} />}
            {isFavoritesVisible && <FavoritesList />}
        </View>
    );
};
