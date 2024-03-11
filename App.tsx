import React from 'react';
import AppNavigator from './src/screens';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {MovieProvider} from './src/context/moviesContext';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieProvider>
        <AppNavigator />
      </MovieProvider>
    </QueryClientProvider>
  );
}

export default App;
