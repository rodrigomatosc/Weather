import React from 'react';
import {useGeolocation} from './hooks/useGeolocation';
import {useLocationPermission} from './hooks/useLocationPermission';
import Home from './pages/Home';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {Store} from './store';
import Loading from './components/Loading';

const queryClient = new QueryClient();

const App = () => {
  const hasLocationPermission = useLocationPermission();
  const geolocation = useGeolocation(hasLocationPermission);

  return (
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
        <Home
          hasLocationPermission={hasLocationPermission}
          geolocation={geolocation}
        />
        <Loading />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
