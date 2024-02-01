import {
  TouchableOpacity,
  View
} from 'react-native';

import {  Ionicons } from "@expo/vector-icons";
import { styles } from './styles';

import { Sheet } from '../../components/Sheet';

export function Home(){
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
      <Ionicons
        color="#FFF"
        name="options"
        size={24}
        styles={styles.buttonIcon}
      />
      </TouchableOpacity>


      <Sheet />
    </View>
  );
}
