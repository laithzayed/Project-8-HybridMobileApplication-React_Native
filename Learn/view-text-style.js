import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello world!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem Test Text <Text style={styles.inheritant}>AAA</Text></Text>
        <Text>Lorem Test Text</Text>
        <Text>Lorem Test Text</Text>
        <Text>Lorem Test Text</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 0,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
    // fontWeight: 'bold',
  },
  inheritant: {
    color: 'red',
  }
});



