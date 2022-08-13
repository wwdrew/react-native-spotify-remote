import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { AppLayout } from './src/components/AppLayout';
import { AppContextProvider } from './AppContext';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppContextProvider>
        <AppLayout />
      </AppContextProvider>
    </NativeBaseProvider>
  );
}
