import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { FetchProvider } from './src/fetch/FetchProvider';
import { FETCH_IMDB, FETCH_MOCK, FETCH_REACT_DEV_API } from './src/fetch/fetchConstants';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/theme/theme';
import { StackNavigation } from './src/screens/StackNavigation';
import { ConnectionProvider } from './src/connection/ConnectionProvider';

const App = () => {
  const fetchProviderType = FETCH_MOCK;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectionProvider>
          <FetchProvider type={fetchProviderType}>
            <PaperProvider theme={theme}>
              <StackNavigation />
            </PaperProvider>
          </FetchProvider>
        </ConnectionProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
