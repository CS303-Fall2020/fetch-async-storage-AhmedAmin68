import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from 'react-native';
import TodoItem from '../components/todoItem';
import AddTodo from '../components/addTodo';
export default function ReviewDetails({ navigation }) {

  const [data, setTodos] = useState([
 
  ]);

  useEffect(async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?userId=1'
    );
    const data = await response.json();
    const item = data;
    setTodos(item);
  }, []);

  const press = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(
        todo => {
          if ((todo.id != id) == false) {
            todo.isDone = !todo.isDone;
          }
          return true;
        } 
      );
    });
  };
  const pres = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id != id);
    });
  };

  const submit = title => {
    if (title.length > 3) {
      setTodos(prevTodos => {
        return [{ title: title, id: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert('oops!', 'Todos must be over 3 chars long');
    }
  };
 
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed Keyboard');
      }}
    >
      <View style={styles.content}>
        <ScrollView>
          <AddTodo submit={submit}/>
          <View style={styles.list} >
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TodoItem
                  item={item}
                  press={press}
                  navigation={navigation}
                  pres={pres}
                  
                ></TodoItem>
              )}
            />
           
          </View>
        </ScrollView>
        <Button title='Refresh' />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
 
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
});
