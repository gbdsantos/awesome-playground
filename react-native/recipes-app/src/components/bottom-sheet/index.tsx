import { Text, View } from 'react-native'
import Animated, { BounceOut, SlideInDown } from 'react-native-reanimated'

import { MaterialIcons } from '@expo/vector-icons'
import { styles } from './styles'
import { theme } from '@/theme'
import { Button } from '../button'

type Props = {
  quantity: number
  onClear: () => void
  onSearch: () => void
}

export function BottomSheet({ quantity, onClear, onSearch }: Props) {
  return(
    <Animated.View entering={SlideInDown.duration(500)} exiting={BounceOut} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>
        <MaterialIcons
          color={theme.colors.gray_400}
          name="close"
          onPress={onClear}
          size={24}
        />
      </View>

      <Button title="Encontrar" onPress={onSearch} />
    </Animated.View>
  )
}
