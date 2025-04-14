import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function DocumentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Documents</Text>
      <View style={styles.separator} lightColor="#ccc" darkColor="rgba(255,255,255,0.2)" />

      <Text style={styles.placeholder}>
        No documents uploaded yet.
      </Text>

      <Text style={styles.subtext}>
        Upload or view documents related to your worksites here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: '100%',
  },
  placeholder: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtext: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});
