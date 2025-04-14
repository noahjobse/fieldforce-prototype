import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { TrashIcon } from '@/components/ui/Icons';

export default function FormsScreen() {
  const router = useRouter(); // ✅ Missing before

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Forms</Text>
      </View>

      <ScrollView style={styles.formsList}>
        {/* ✅ Fixed New Form button */}
        <TouchableOpacity style={styles.newFormButton} onPress={() => router.push('/forms/form-type-selector')}>
          <Text style={styles.newFormText}>New Form</Text>
        </TouchableOpacity>

        <View style={styles.formsGrid}>
          <FormCard title="Worksite Checklist" date="01/02/25" />
          <FormCard title="Safety Meeting Form" date="01/02/25" />
          <FormCard title="Daily Equipment Check" date="01/02/25" />
          <FormCard title="Hazard Identification" date="01/01/25" />
          <FormCard title="Employee Attendance" date="01/01/25" />
          <FormCard title="Safety Meeting Form" date="01/01/25" />
        </View>
      </ScrollView>
    </View>
  );
}

function FormCard({ title, date }: { title: string; date: string }) {
  return (
    <View style={styles.formCard}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDate}>{date}</Text>
      <TouchableOpacity style={styles.deleteIcon}>
        <TrashIcon />
      </TouchableOpacity>
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
  formsList: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
  newFormButton: {
    alignSelf: 'center',
    backgroundColor: '#c9d4ce',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginVertical: 12,
  },
  newFormText: {
    color: '#35615d',
    fontWeight: '600',
    fontSize: 14,
  },
  formsGrid: {
    flexDirection: 'column',
    gap: 16,
    paddingBottom: 24,
  },
  formCard: {
    backgroundColor: '#f5c7c7',
    borderRadius: 8,
    padding: 16,
    position: 'relative',
  },
  cardTitle: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: '500',
    color: '#8f3232',
  },
  cardDate: {
    fontSize: 12,
    color: '#a33e3e',
  },
  deleteIcon: {
    position: 'absolute',
    right: 8,
    top: 8,
    backgroundColor: '#f0b0b0',
    height: 24,
    width: 24,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
