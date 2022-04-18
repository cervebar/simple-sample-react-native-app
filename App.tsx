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
import { HomeButton } from './src/components/HomeButton';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/theme/theme';
import { MAIN_THEME_COLOR } from './src/utils/theme/Colors';

const Stack = createNativeStackNavigator();

const App = () => {
    const fetchProviderType = FETCH_MOCK;
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <FetchProvider type={fetchProviderType}>
                    <PaperProvider theme={theme}>
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
                    </PaperProvider>
                </FetchProvider>
            </PersistGate>
        </Provider>
    );
};
export default App;
