import { View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { stylesheet } from "./styles"
import { theme } from "../../libs/theme"
import { useStyles } from "react-native-unistyles"

interface Props {
  max: number
  value: number
}

export function Rating({ max = 5, value }: Props) {
  const length = value > max ? max : value
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      {Array.from({ length }).map((_, index) => (
        <MaterialIcons
          color={theme.colors.primary}
          key={index}
          name="star"
          size={42}
          />
      ))}

      {Array.from({ length: max - value }).map((_, index) => (
        <MaterialIcons
          color={theme.colors.shape}
          key={index}
          name="star"
          size={42}
        />
      ))}
    </View>
  )
}
