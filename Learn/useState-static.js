import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('laith');
  const [person, SetPerson] = useState({name: 'mario', age: 40});

  const clickHandler = () => {
    setName('New laith');
    SetPerson({name: 'lugi', age:45});
  }

  return (
    <View style={styles.container}>
        <Text>My name is: {name}</Text>
        <Text>My name is: {person.name} and his age is {person.age}</Text>
        <Text></Text>
        <View style={styles.buttonContainer}>
          <Button title='update state' onPress={clickHandler} />
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
  buttonContainer: {
    marginTop: 20,
  }
});



