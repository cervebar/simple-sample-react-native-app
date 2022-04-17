import { View, Text, Button } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

export const DetailScreen: FC = () => {
    const nav = useNavigation();
    const title = 'title';
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{title}</Text>
            <Button title="Go back" onPress={() => nav.goBack()} />
        </View>
    );
};
