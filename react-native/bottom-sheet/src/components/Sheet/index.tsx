import {
  Text,
  View
} from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from './styles';

export function Sheet(){
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        color="#999"
        name="drag-horizontal"
        size={24}
        style={styles.dragIcon}
      />

      <Text style={styles.title}>
        OPTIONS
      </Text>
    </View>
  );
}
