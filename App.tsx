import 'react-native-gesture-handler';

import React from 'react';
import AuthStackLogin from './src/router/AuthSignIn.router';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthStackLogin />
      <StatusBar style='auto' />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
