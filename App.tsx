import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from './src/screens/DetailScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { RouteDetail, RouteHome } from './src/hooks/navigationParams';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={RouteHome} component={HomeScreen} />
                <Stack.Screen name={RouteDetail} component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;
