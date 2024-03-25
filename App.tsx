import React from 'react';
import AppNavigator from './src/screens';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {MovieProvider} from './src/context/moviesContext';
import {UserProvider} from './src/context/userContext';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <MovieProvider>
          <AppNavigator />
        </MovieProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
