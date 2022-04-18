import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ItemT } from '../types/ItemT';
import { RootRouteProps } from '../hooks/navigationParams';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorite } from '../redux/slices/favorites';
import { useIsFavorite } from '../hooks/selectors/useIsFavorite';

export type DetailScreenProps = {
    data: ItemT;
};

export const DetailScreen = () => {
    const nav = useNavigation();
    const route = useRoute<RootRouteProps<'RouteDetail'>>();
    const dispatch = useDispatch();
    const { data } = route.params;
    const { id, title, description, rating, moviePosterUrl } = data;
    const isFavorite = useIsFavorite(id);

    const add = () => {
        dispatch(addToFavorites(data));
    };
    const remove = () => {
        dispatch(removeFromFavorite(id));
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Go back" onPress={() => nav.goBack()} />
            {!isFavorite && <Button title="Save to favorite" onPress={add} />}
            {isFavorite && <Button title="Remove from favorite" onPress={remove} />}
            <View style={{ flex: 1, padding: 24 }}>
                <Text>is in favorites: {isFavorite ? 'favorite' : 'notFavorit'}</Text>
                <Text>{id}</Text>
                <Text>{title}</Text>
                <Text>{description}</Text>
                <Text>{rating}</Text>
            </View>
        </View>
    );
};
