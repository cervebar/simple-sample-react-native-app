import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { FETCH_IMDB, FETCH_MOCK, FETCH_REACT_DEV_API, FetchProvider } from './src/fetch/FetchProvider';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/theme/theme';
import { StackNavigation } from './src/screens/StackNavigation';

const App = () => {
  const fetchProviderType = FETCH_IMDB;//TODO add this to config
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <FetchProvider type={fetchProviderType}>
            <PaperProvider theme={theme}>
              <StackNavigation />
            </PaperProvider>
          </FetchProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
