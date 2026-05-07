import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [pessoas, setPessoas] = useState('');
  const [visivel, setVisivel] = useState(false);

  const router = useRouter();

  // --- LÓGICA DE VALIDAÇÃO ---
  // Esta variável será 'true' apenas se todos os campos tiverem texto
  const camposPreenchidos = 
    nome.trim() !== '' && 
    data.trim() !== '' && 
    horario.trim() !== '' && 
    pessoas.trim() !== '';

  const handleAgendamento = () => {
    // Se por algum motivo clicar e não estiver cheio, a função para aqui
    if (!camposPreenchidos) return;

    setVisivel(true);
    setTimeout(() => {
      setVisivel(false);
    }, 2000);
  };
   
  return (
    <View style={{ flex: 1, backgroundColor: '#978FA6' }}>
      
      <Modal transparent={true} visible={visivel} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.alerta}>
            <Text style={styles.alertaTexto}>✅ Agendamento concluído!</Text>
          </View>
        </View>
      </Modal>

      <ScrollView style={styles.container}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.input} placeholder="Digite seu nome" value={nome} onChangeText={setNome} />
        
        <Text style={styles.label}>Data:</Text>
        <TextInput style={styles.input} placeholder="DD/MM/AAAA" value={data} onChangeText={setData} />
        
        <Text style={styles.label}>Horário de inicio:</Text>
        <TextInput style={styles.input} placeholder="00:00" value={horario} onChangeText={setHorario} />
        
        <Text style={styles.label}>Numero de pessoas:</Text>
        <TextInput style={styles.input} placeholder="Ex: 4" value={pessoas} onChangeText={setPessoas} keyboardType="numeric" />
        
        <View style={styles.buttonContainer}>
          {/* BOTÃO COM LÓGICA DE DESATIVADO */}
          <TouchableOpacity 
            style={[
              styles.buttonAgendar, 
              !camposPreenchidos && styles.buttonDesativado // Aplica estilo cinza se incompleto
            ]} 
            onPress={handleAgendamento}
            disabled={!camposPreenchidos} // IMPEDE O CLIQUE
          >
            <Text style={styles.buttonText}>Confirmar Agendamento</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonVoltar} onPress={() => router.back()}>
            <Text style={styles.buttonVoltarText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 18, fontWeight: 'bold', color: '#FFF', marginTop: 20 },
  input: { height: 50, backgroundColor: '#E6E2E0', borderRadius: 8, paddingHorizontal: 15, marginTop: 10 },
  buttonContainer: { marginTop: 30, paddingBottom: 40 },
  buttonAgendar: {
    backgroundColor: '#4B3F72', 
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
  },
  // ESTILO PARA O BOTÃO BLOQUEADO
  buttonDesativado: {
    backgroundColor: '#7a7a7a', // Cinza
    opacity: 0.5,
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  buttonVoltar: { marginTop: 15, alignItems: 'center' },
  buttonVoltarText: { color: '#FFF', fontSize: 16, textDecorationLine: 'underline' },
  overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' },
  alerta: { backgroundColor: '#2ecc71', padding: 25, borderRadius: 15 },
  alertaTexto: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});
