import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator } from "react-native";

// Login screen for the FieldForce app with branding, welcome message, input fields, and navigation to the main tab layout
export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError("Please fill in both username and password.");
      return;
    }
    setError('');
    setLoading(true); // Show spinner
  
    setTimeout(() => {
      setLoading(false); // Optional: can skip since router.replace removes the screen
      router.replace("/(tabs)");
    }, 1000);
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../components/Logo.png")} style={styles.logo} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Welcome to FieldForce</Text>
        <Text style={styles.subtitle}>Where Service{"\n"}Meets Impact</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#2a9d8f"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#2a9d8f"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>

      {loading ? (
          <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 12 }} />
        ) : (
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        )}


      <Text style={styles.helpText}>Need help?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a9d8f",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingTop: 32,
    paddingBottom: 32,
  },
  logoContainer: {
    backgroundColor: "#ffffff",
    height: 64,
    width: 64,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  content: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
    color: "#ffffff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "300",
    color: "#ffffff",
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    marginBottom: 24,
  },
  input: {
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#2a9d8f",
    marginBottom: 12,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 8,
  },
  loginButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    width: "100%",
    borderRadius: 9999,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#2a9d8f",
    fontWeight: "500",
    fontSize: 16,
  },
  helpText: {
    marginTop: 16,
    fontSize: 12,
    fontWeight: "300",
    color: "#ffffff",
  },
});
