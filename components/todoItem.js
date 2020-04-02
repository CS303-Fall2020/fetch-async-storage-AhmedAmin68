import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View
} from 'react-native';

export default function TodoItem({ item, press, navigation, pres }) {
  const presshand = () => {
    navigation.navigate('TaskDetail', item);

  };



  return (
    <TouchableOpacity onPress={() => press(item.id)}>
      <Text style={item.isDone ? styles.itemf : styles.item}>
        {item.title}
      </Text>

      <Button title='Details' onPress={presshand} color='#283747'>

      </Button>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 20,




        }}
      >
        <Text> </Text>
        <Button
          title='Delete'
          color='#7B7D7D'
          onPress={
            () =>
              pres(
                item.id


              )

          }
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
    textAlign: 'center',
    fontSize: 20,
    color: 'red'
  },
  itemf: {
    padding: 16,
    marginTop: 16,
    borderColor: 'green',
    borderWidth: 1,
    borderStyle: 'dashed',
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: 'line-through',
    color: 'green'
  },

});
