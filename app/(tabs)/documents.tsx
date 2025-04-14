import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function DocumentsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      </View>

      <View style={styles.content}>
        <Text style={styles.placeholder}>No documents uploaded yet.</Text>
        <Text style={styles.subtext}>
          Upload or view documents related to your worksites here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a9d8f',
  },
  titleContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: '100%',
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 6,
    color: '#8f3232',
  },
  subtext: {
    fontSize: 14,
    color: '#a33e3e',
    textAlign: 'center',
  },
});
