import { ThemedText } from '@/components/themed-text';
import { ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
  <ThemedText style={styles.textCenter}>Vivid Celebrations</ThemedText>
</ScrollView>
  );
}//

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#978FA6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
  },
});
  