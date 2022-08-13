import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { AppLayout } from './src/components/AppLayout';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppLayout />
    </NativeBaseProvider>
  );
}