import React, { useState } from 'react';
import Config from 'react-native-config';
import { View, Button, Text } from 'native-base';

import styles from './styles';

export function EnvVars() {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  return (
    <View style={styles.container}>
      <Button onPress={toggleShow}>
        <Text>Environment Variables</Text>
      </Button>
      {show ? (
        <View>
          <Text style={styles.welcome}>App .env Variables</Text>
          <Text style={styles.instructions}>
            Auth Redirect Url: {Config.SPOTIFY_REDIRECT_URL}
          </Text>
          <Text style={styles.instructions}>
            Token Refresh URL: {Config.SPOTIFY_TOKEN_REFRESH_URL}
          </Text>
          <Text style={styles.instructions}>
            Token Swap Url: {Config.SPOTIFY_TOKEN_SWAP_URL}
          </Text>
        </View>
      ) : null}
    </View>
  );
}
