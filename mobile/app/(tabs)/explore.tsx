import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput } from 'react-native';

export default function HomeScreen() {
  const [texto, setTexto] = useState('');
  return (
    <ScrollView style={styles.container}>
      <TextInput
      style={styles.input}
      
      
      
      
      />
  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#978FA6',
   padding : 20
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginTop: 50,
  }
});
