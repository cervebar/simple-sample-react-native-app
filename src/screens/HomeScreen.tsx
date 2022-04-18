import { View, Text, Button } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RouteDetail, NavigationProps } from '../hooks/navigationParams';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import { setMessage, clearMessage } from '../redux/message';
import { Movies } from './Movies';

export const HomeScreen: FC = () => {
    const dispatch = useDispatch();
    const { message } = useSelector((state: RootState) => state.message);

    const handlePress = () => {
        dispatch(setMessage('Message from Component' + new Date()));
    };
    const handlePress2 = () => {
        dispatch(clearMessage());
    };

    const nav = useNavigation<NavigationProps>();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{message}</Text>
            <Button title={'Set Message'} onPress={handlePress} />
            <Button title={'clear Message'} onPress={handlePress2} />
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => nav.navigate(RouteDetail)} />
            <Movies />
        </View>
    );
};
