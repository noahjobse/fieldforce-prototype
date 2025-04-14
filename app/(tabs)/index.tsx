import { Redirect } from 'expo-router';

// This file is the entry point for the app. It redirects to the worksites page
export default function Index() {
  return <Redirect href="/(tabs)/worksites" />;
}
