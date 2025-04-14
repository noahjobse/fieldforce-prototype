import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import { useForms } from './FormsContext';

export default function SafetyMeetingForm() {
  const router = useRouter();
  const { addForm } = useForms();

  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingDate, setMeetingDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [meetingNotes, setMeetingNotes] = useState('');

  const handleSubmit = () => {
    if (!meetingTitle.trim() || !meetingDate) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    const formattedDate = meetingDate.toLocaleDateString();

    addForm({ title: meetingTitle, date: formattedDate, type: 'Safety Meeting' });

    Alert.alert('Success', 'Form submitted.', [
      { text: 'OK', onPress: () => router.replace('/forms') },
    ]);

    setMeetingTitle('');
    setMeetingDate(null);
    setMeetingNotes('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.header}>Safety Meeting Form</Text>

        {/* Meeting Title */}
        <Text style={styles.label}>Meeting Title *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter meeting title"
          value={meetingTitle}
          onChangeText={setMeetingTitle}
        />

        {/* Meeting Date */}
        <Text style={styles.label}>Meeting Date *</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
          <Text style={{ fontSize: 16, color: meetingDate ? '#000' : '#888' }}>
            {meetingDate ? meetingDate.toLocaleDateString() : 'Select a date'}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={meetingDate || new Date()}
            mode="date"
            display={Platform.OS === 'ios' ? 'inline' : 'default'}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setMeetingDate(selectedDate);
            }}
            themeVariant="light"
          />
        )}

        {/* Meeting Notes */}
        <Text style={styles.label}>Meeting Notes</Text>
        <TextInput
          style={styles.input}
          placeholder="Optional notes..."
          value={meetingNotes}
          onChangeText={setMeetingNotes}
          multiline={false}
          returnKeyType="done"
          blurOnSubmit={true}
          onSubmitEditing={handleSubmit}
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Form</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2a9d8f',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: { fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#35615d' },
  input: {
    borderWidth: 1,
    borderColor: '#c9d4ce',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#2a9d8f',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  submitButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
