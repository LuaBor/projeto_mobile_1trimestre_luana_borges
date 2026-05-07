import { ThemedText } from '@/components/themed-text';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';


export default function HomeScreen() {
  const [texto, setTexto] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');
  const router = useRouter();
  const handleAgendamento = () => {
    if (nome.trim() === '' || email.trim() === '' || senha.trim() === '' || confirmacao.trim() === '') {
      Alert.alert(
        "Campos Obrigatórios",
        "Por favor, preencha todas as informações antes de continuar.",
        [{ text: "OK" }]
      );
      return;
    }
    if (senha !== confirmacao) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
    router.push('/vit');
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
  <ThemedText style={styles.textCenter}>Vivid Celebrations</ThemedText>
 
  <Text style={styles.label}>Nome:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Text style={styles.label}>Confirmação de senha:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Confirme sua senha"
        value={confirmacao}
        onChangeText={setConfirmacao}
        secureTextEntry
      />
      <TouchableOpacity 
  style={[styles.button, { opacity: nome && email && senha ? 1 : 0.5 }]} 
  onPress={handleAgendamento}
  disabled={!nome || !email || !senha}
>
  <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>

</ScrollView>
  );
}//

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#978FA6',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 80,
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: 'rgb(0, 0, 100)',
    textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 40,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
    marginTop: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 100,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4B3F72', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 30,
    width: '80%', 
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

  