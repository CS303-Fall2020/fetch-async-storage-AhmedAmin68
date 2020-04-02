import React, { useState } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { globalStyles } from '../styles/global';
export default function Home({ navigation }) {
  const press = () => {
    navigation.navigate('ReviewDetails'); 
  };
  const pressHand = () => {
   
    navigation.navigate('Important');
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Welcome To Your Todo App</Text>
      <Button title='Your List'  onPress={press}  color='green'/>
    </View>
  );
}
