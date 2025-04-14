import { Slot } from 'expo-router';
import { FormsProvider } from './FormsContext'; // ✅ relative to folder

export default function FormsLayout() {
  return (
    <FormsProvider>
      <Slot />
    </FormsProvider>
  );
}
