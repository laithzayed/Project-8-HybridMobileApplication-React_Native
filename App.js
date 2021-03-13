import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import PressDone from './components/pressDone';
import Sandbox from './components/sandbox';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'I have meeting with Google', key: '1' },
    { text: 'I will play chess', key: '2' },
    { text: 'Doing some sports', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {

    if (text.length > 3 && text.length <= 30 ) {

      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS!', 'ToDos must be over (3 chars long), and less than (30 chars long)', [{ text: 'I got it'}]
      //Seconed Alert Box after 'OOPS' If I want to add it more.
      // [
      //   {, onPress: () => alert('alert closed') }
      // ]
      );
    }

  }


  return (
    // <Sandbox />
    
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                // <Text>{item.text}</Text>
                <TodoItem item={item} pressHandler={pressHandler} />
              )}

            />
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    marginTop:0,
    padding: 40,
    backgroundColor: '#f2edd7',
    flex: 1,
    borderRadius: 10,
  },
  list: {
    flex: .96,
    marginTop: 20,
    backgroundColor: '#fffff7',
    borderRadius: 10,
  },
})