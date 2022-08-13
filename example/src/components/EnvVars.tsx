import React, { useState } from 'react';
import { View, Button, Text } from 'native-base';
import styles from './styles';

export default function EnvVars () {
    const [show, setShow] = useState(false);

    return (
      <View style={styles.container}>
        <Button onPress={() => setShow(!show)}>
          <Text>Environment Variables</Text>
        </Button>
        {show ? (
          <View>
            <Text style={styles.welcome}>App .env Variables</Text>
          </View>
        ): null}
      </View>
    )
}
