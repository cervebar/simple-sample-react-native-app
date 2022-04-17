import { View, Text, Button } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RouteDetail, NavigationProps } from '../hooks/navigationParams';

export const HomeScreen: FC = () => {
    const nav = useNavigation<NavigationProps>();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => nav.navigate(RouteDetail)} />
        </View>
    );
};
