import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'laith', key: '1' },
    { name: 'laith2', key: '2' },
    { name: 'laith3', key: '3' },
    { name: 'laith4', key: '4' },
    { name: 'laith5', key: '5' },
    { name: 'laith6', key: '6' },
    { name: 'laith7', key: '7' },
  ]);

  return (
    <View style={styles.container}>

      <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
        )}
      </ScrollView>

{/* // Another tradiotional wat to write return function */}

      {/* <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 40,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});



