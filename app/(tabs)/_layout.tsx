import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import Header from '@/components/Header';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

// This is the main layout for the navigation bar
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      {/* Global Custom Header */}
      <Header />

      {/* Tab Navigator Below */}
      <View style={styles.tabContainer}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false,
          }}
        >
          {/* Hide index.tsx from the tab bar */}
          <Tabs.Screen
            name="index"
            options={{
              href: null,
            }}
          />
        </Tabs>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a9d8f',
  },
  tabContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
