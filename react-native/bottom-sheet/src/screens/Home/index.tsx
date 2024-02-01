import { useState } from 'react';
import {
  TouchableOpacity,
  View
} from 'react-native';

import { Sheet } from '../../components/Sheet';

import {  Ionicons } from "@expo/vector-icons";
import { styles } from './styles';

export function Home(){
  const [isOpen, setIsOpen] = useState(false)

  function toggleSheet() {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={toggleSheet}
        style={styles.button}
      >
      <Ionicons
        color="#FFF"
        name="options"
        size={24}
        styles={styles.buttonIcon}
      />
      </TouchableOpacity>

      { isOpen && <Sheet onClose={toggleSheet}/> }
    </View>
  );
}
