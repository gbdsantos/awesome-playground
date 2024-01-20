import { useEffect, useState } from 'react';
import { LogBox, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Voice, { SpeechResultsEvent } from "@react-native-voice/voice";

import { Feather } from "@expo/vector-icons";

LogBox.ignoreLogs(["new NativeEventEmitter"]);

export default function App() {
  const [search, setSearch] = useState("");
  const [isListening, setIsListening] = useState(false);

  function onSpeechResults({ value }: SpeechResultsEvent) {
    console.log("AQUI", value);
    const text = value ?? [];

    setSearch(text.join().replace(",", " "));
  }

  async function handleListening() {
    try {
      if (isListening) {
        await Voice.stop();
        setIsListening(false);
      } else {
        setSearch("");

        await Voice.start("pt-BR");
        setIsListening(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        style="light"
        translucent
      />

      <View style={styles.header}>
        <TextInput
          editable={!isListening}
          onChangeText={setSearch}
          placeholder={isListening ? "Recording..." : "Search..."}
          style={styles.input}
          value={search}
        />

        <Pressable onPress={handleListening} style={styles.button}>
          <Feather
            color="#fff"
            name={isListening ? "pause" : "mic"}
            size={24}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151718",
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
