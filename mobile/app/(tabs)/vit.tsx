import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export default function HomeScreen() {
  const [texto, setTexto] = useState('');
  const handleAgendamento = () => {
    Alert.alert("Sucesso", "Agendamento realizado!");
  };
  return (
    <ScrollView style={styles.container}>
    <Text style={styles.label}>Nome:</Text>
    <TextInput style={styles.input} />
    <Text style={styles.label}>Data:</Text>
    <TextInput  style={styles.input} ></TextInput>
    <Text style={styles.label}>Horário de inicio:</Text>
    <TextInput style={styles.input} />
    <Text style={styles.label}>Numero de pessoas:</Text>
    <TextInput style={styles.input} />
    <Text style={styles.label}></Text>
    <Button 
        title="Agendar" 
        onPress={handleAgendamento} 
        color="#000" 
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
    marginTop: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#E6E2E0',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginTop: 50,
  }
  
});
