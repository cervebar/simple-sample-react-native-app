import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import {  RouteDetail, RouteHome } from '../hooks/navigationParams';
import { MAIN_THEME_COLOR } from '../utils/theme/Colors';
import { HomeScreen } from './HomeScreen';
import { DetailScreen } from './DetailScreen';
import { HomeButton } from '../components/HomeButton';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: MAIN_THEME_COLOR,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name={RouteHome}
          component={HomeScreen}
          options={{
            headerTitle: 'SimpleSample',
          }}
        />
        <Stack.Screen
          name={RouteDetail}
          component={DetailScreen}
          options={{
            headerTitle: 'SimpleSample',
            headerRight: () => <HomeButton />,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
