import React, { useState, useContext, useCallback } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { ApiConfig } from 'react-native-spotify-remote';
import { View, Button, Switch } from 'native-base';

import AppContext from '../../AppContext';

export function Authenticate() {
  const { token, authenticate } = useContext(AppContext);
  const [showDialog, setShowDialog] = useState(false);

  const handleConnect = useCallback(
    (playURI?: string, authType?: ApiConfig['authType']) => {
      authenticate({
        showDialog,
        playURI,
        authType,
      });
    },
    [showDialog, token],
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Connect To Spotify</Text>
      </View>
      <View style={styles.content}>
        <Text>Show Auth Dialog:</Text>
        <Switch value={showDialog} onValueChange={setShowDialog} />
      </View>
      <Button onPress={() => handleConnect()}>
        <Text>Authenticate Silently</Text>
      </Button>
      <Button
        onPress={() => handleConnect('spotify:track:5BYWuQEiyb6bxJGWIvsnpF')}>
        <Text>Auth and Play</Text>
      </Button>
      <Button onPress={() => handleConnect('')}>
        <Text>Auth and Resume Playback</Text>
      </Button>
      {Platform.OS === 'android' && (
        <Button onPress={() => handleConnect(undefined, 'CODE')}>
          <Text>Auth with CODE (android)</Text>
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    flexGrow: 1,
  },
  heading: {
    fontSize: 28,
    textAlign: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
