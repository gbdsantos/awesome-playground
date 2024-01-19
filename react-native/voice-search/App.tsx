import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        style="dark"
        translucent
      />

      <View style={styles.header}>
        <TextInput placeholder="Search..." style={styles.input} />

        <Pressable style={styles.button}>
          <Feather name="mic" color="#fff" size={24} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 52,
  },
  header: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 12,
    width: '100%'
  },
  input: {
    flex: 1,
    backgroundColor: "#d9e6eb",
    borderRadius: 12,
    fontSize: 16,
    height: 54,
    padding: 16
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6f4ae5",
    borderRadius: 12,
    height: 54,
    width: 54
  }
});
