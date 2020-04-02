import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>List of Todo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'green',
    color:'red'
  },
  title: {
    textAlign: 'center',
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  }
});