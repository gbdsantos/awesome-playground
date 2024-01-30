import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet(theme => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
}))
