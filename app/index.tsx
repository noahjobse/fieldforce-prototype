import { Redirect } from "expo-router";

// This file is the entry point for the app. It redirects to the login page
export default function Index() {
  return <Redirect href="/login" />;
}