import { useNavigation } from '@react-navigation/native';
import { NavigationProps, RouteHome } from '../hooks/navigationParams';
import { TouchableOpacity } from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';

export const HomeButton = () => {
    const nav = useNavigation<NavigationProps>();
    return (
        <TouchableOpacity
            onPress={() => {
                nav.navigate(RouteHome);
            }}
        >
            <AntIcon name="home" color="white" size={20} />
        </TouchableOpacity>
    );
};
