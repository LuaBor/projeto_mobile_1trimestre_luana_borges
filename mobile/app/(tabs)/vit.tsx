import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [texto, setTexto] = useState('');
  const router = useRouter();
  const handleAgendamento = () => {
    
    const handleAgendamento = () => {
      Alert.alert(
        "Cadastro Concluído",
        "Sua reserva foi realizada com sucesso!",
        [{ text: "Entendido", onPress: () => router.push('/') }]
      );
    };
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
    
    <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.buttonAgendar} 
          onPress={handleAgendamento}
        >
          <Text style={styles.buttonText}>Confirmar Agendamento</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonVoltar} 
          onPress={() => router.back()} 
        >
          <Text style={styles.buttonVoltarText}>Voltar</Text>
        </TouchableOpacity>
      </View>
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
  },
  buttonContainer: {
    marginTop: 30,
  },
  buttonAgendar: {
    backgroundColor: '#4B3F72', 
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
  },
  buttonVoltar: {
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonVoltarText: {
    color: '#FFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
