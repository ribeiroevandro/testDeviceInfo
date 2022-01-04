import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import deviceInfo from 'react-native-device-info';




const App = () => {
  const [deviceId, setDeviceId] = useState('')

  useEffect(() => {
    deviceInfo.syncUniqueId().then((uniqueId) => setDeviceId(uniqueId));
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>DeviceID: {deviceId}</Text>
      <Text style={styles.text}>Caracteres: {deviceId.length}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18
  }
});

export default App;
