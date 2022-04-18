import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from './src/screens/DetailScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { RouteDetail, RouteHome } from './src/hooks/navigationParams';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { FetchProvider } from './src/fetch/FetchProvider';
import { FETCH_IMDB, FETCH_MOCK, FETCH_REACT_DEV_API } from './src/fetch/fetchConstants';

const Stack = createNativeStackNavigator();

const App = () => {
    const fetchProviderType = FETCH_IMDB;
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <FetchProvider type={fetchProviderType}>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen name={RouteHome} component={HomeScreen} />
                            <Stack.Screen name={RouteDetail} component={DetailScreen} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </FetchProvider>
            </PersistGate>
        </Provider>
    );
};
export default App;
