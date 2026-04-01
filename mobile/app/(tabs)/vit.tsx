import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export default function HomeScreen() {
  const [texto, setTexto] = useState('');
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Digite seu nome:</Text>
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
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8, 
    marginTop: 50,
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
