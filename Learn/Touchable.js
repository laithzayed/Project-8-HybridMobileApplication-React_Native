import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'laith0', id: '1' },
    { name: 'laith2', id: '2' },
    { name: 'laith3', id: '3' },
    { name: 'laith4', id: '4' },
    { name: 'laith5', id: '5' },
    { name: 'laith6', id: '6' },
    { name: 'laith7', id: '7' },
  ]);

  const pressHandler =(id) => {
    // alert(id);
    setPeople ((prevPeople)=> {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}

      />

      {/* <ScrollView>eople.map(item => (
          <Text style={styles.item}>{item.name}</Text>
          <View key={item.key}>
          </View>
        )
        )}
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
    marginHorizontal: 10,
    marginTop: 24,
  }
});



