import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [nome, setNome] = useState('');
const [data, setData] = useState('');
const [horario, setHorario] = useState('');
const [pessoas, setPessoas] = useState(''); 
  const router = useRouter();
  const handleAgendamento = () => {
   
    if (nome.trim() === '' || data.trim() === '' || horario.trim() === '' || pessoas.trim() === '') {
      Alert.alert(
        "Campos Obrigatórios", 
        "Por favor, preencha todas as informações antes de continuar.",
        [{ text: "OK" }]
      );
      return; 
    }
    Alert.alert("Sucesso", "Sua reserva foi concluída!");
  };
   
   
  return (
     
      <ScrollView style={styles.container}>
        
        <Text style={styles.label}>Nome:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>Data:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="DD/MM/AAAA"
          value={data}
          onChangeText={setData}
        />
        <Text style={styles.label}>Horário de inicio:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="00:00"
          value={horario}
          onChangeText={setHorario}
        />
        <Text style={styles.label}>Numero de pessoas:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Ex: 4"
          value={pessoas}
          onChangeText={setPessoas}
          keyboardType="numeric"
        />
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
