import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Authenticate from './Authenticate';

import EnvVars from './EnvVars';

import styles from './styles';

export function AppLayout() {
    return (
      <SafeAreaView style={styles.container}>
        <Authenticate />
        <EnvVars />
      </SafeAreaView>
    )
  }
  