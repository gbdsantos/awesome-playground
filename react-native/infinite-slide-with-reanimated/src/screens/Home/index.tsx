import { View } from 'react-native';

import { Slider } from '../../components/Slider';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Slider />
    </View>
  );
}