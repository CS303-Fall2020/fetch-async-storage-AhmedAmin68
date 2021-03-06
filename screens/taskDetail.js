import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert
} from 'react-native';
import { globalStyles } from '../styles/global';

export default function TaskDetail({ navigation, route }) {
  const [title, setText] = useState('');
  const change = val => {
    setText(val);
  };

  const presshand = () => {

    navigation.navigate('ReviewDetails');

  };
  const submit = title => {
    if (title.length > 3) {
      todo = route.Params;
      todo.title = title;
      navigation.setParams(todo);
      navigation.goBack();

    } else {
      Alert.alert('oops!', 'Todos must be over 3 chars long'),
        [{ text: 'under stood ', onPress: () => console.log('alert closed') }];
    }
  };

  return (
    <View style={globalStyles.container}>
      <TextInput
        style={styles.input}
        placeholder='update'
        onChangeText={val => change(val)}
      >
        <Text>{navigation.getParam('title')}</Text>
      </TextInput>
      <Button
        title='submit '
        color='green'
        onPress={presshand}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  }
});
