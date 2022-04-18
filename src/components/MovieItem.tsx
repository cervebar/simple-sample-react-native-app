import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Item } from '../types/Item';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps, RouteDetail } from '../hooks/navigationParams';

export type MovieItemProps = {
    data: Item;
};

export const MovieItem = ({ data }: MovieItemProps) => {
    const nav = useNavigation<NavigationProps>();
    const { id, title, description, rating, moviePosterUrl } = data;

    return (
        <TouchableOpacity
            onPress={() =>
                nav.navigate(RouteDetail, {
                    data: data,
                })
            }
            key={id}
        >
            <View style={{ flex: 1, padding: 24 }}>
                <Text>{title}</Text>
                <Text>{description}</Text>
                <Text>{rating}</Text>
            </View>
        </TouchableOpacity>
    );
};
