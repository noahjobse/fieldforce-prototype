import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={require('@/components/Logo.png')} style={styles.logo} />
      </View>
      <TouchableOpacity style={styles.emergencyButton}>
        <Text style={styles.emergencyButtonText}>Emergency Info</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    paddingHorizontal: 16,
    marginTop: 48, // Added top margin
  },
  logoContainer: {
    backgroundColor: '#ffffff',
    height: 32,
    width: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  emergencyButton: {
    backgroundColor: '#e76f6f',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  emergencyButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ffffff',
  },
});
