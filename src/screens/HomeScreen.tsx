import React, { FC, useState } from 'react';
import { SearchResultMovies } from '../components/SearchResultMovies';
import { FavoritesList } from '../components/FavoritesList';
import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

const HomeScreenContainer = styled.View`
    display: flex;
    align-items: center;
`;

const ShowButtonMenu = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
`;

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
        <HomeScreenContainer>
            <ShowButtonMenu>
                <Button compact icon="star" mode="contained" onPress={showFavorites}>
                    favorites
                </Button>
                <Button compact icon="movie-search" mode="contained" onPress={showSearch}>
                    Search
                </Button>
            </ShowButtonMenu>
            {isSearchVisible && <SearchResultMovies />}
            {isFavoritesVisible && <FavoritesList />}
        </HomeScreenContainer>
    );
};
