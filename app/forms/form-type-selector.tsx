// File: /app/forms/form-type-selector.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function FormTypeSelectorScreen() {
  const router = useRouter();

  const forms = [
    { label: 'Safety Meeting', route: '/forms/safety-meeting-form' },
    // Additional forms can go here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Form</Text>
      {forms.map(({ label, route }) => (
        <TouchableOpacity
          key={label}
          style={styles.button}
          onPress={() => router.push(route)}
        >
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, color: '#2a9d8f' },
  button: {
    backgroundColor: '#c9d4ce',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: { fontSize: 16, color: '#35615d', fontWeight: '600' },
});
