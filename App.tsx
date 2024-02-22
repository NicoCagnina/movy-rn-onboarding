import React from 'react';
import AppNavigator from './src/screens';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {SafeAreaView} from 'react-native';
import Colors from './src/types/colors';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{backgroundColor: Colors.black, flex: 1}}>
        <AppNavigator />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
