import { colors } from "./colors"

export const components = {
  button: {
    base: {
      backgroundColor: colors.primary
    },
    outline: {
      backgroundColor: "transparent",
      borderColor: colors.primary,
      borderWidth: 2
    }
  },

  buttonText: {
    base: {
      color: colors.white
    },
    outline: {
      color: colors.primary
    }
  }
}
