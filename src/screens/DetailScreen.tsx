import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Item } from '../types/Item';
import { RootRouteProps } from '../hooks/navigationParams';

export type DetailScreenProps = {
    data: Item;
};

export const DetailScreen = () => {
    const nav = useNavigation();
    const route = useRoute<RootRouteProps<'RouteDetail'>>();
    const { data } = route.params;
    const { id, title, description, rating, moviePosterUrl } = data;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Go back" onPress={() => nav.goBack()} />
            <View style={{ flex: 1, padding: 24 }}>
                <Text>{title}</Text>
                <Text>{description}</Text>
                <Text>{rating}</Text>
            </View>
        </View>
    );
};
