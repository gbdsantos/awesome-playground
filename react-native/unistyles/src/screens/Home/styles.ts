import { createStyleSheet } from 'react-native-unistyles'

export const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: {
      // Using media queries
      ':w[200, 500]': theme.colors.background,
      ':w[500, 900]': "red"
    },
  },
  header: {
    width: "100%",
    height: {
      // Set element height according of screen size
      xs: 184,
      sm: 184,
      md: 284
    },
    alignItems: "center",
    backgroundColor: {
      // Set background color according of screen size
      xs: theme.colors.primary,
      sm: theme.colors.primary,
      md: "red"
    },
  },
  img: {
    // Set image height/width according of screen size
    height: {
      xs: 232,
      sm: 232,
      md: 332
    },
    width: {
      xs: 140,
      sm: 140,
      md: 240
    },
  },
  content: {
    flex: 1,
    marginTop: 72,
    padding: 32,
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: theme.colors.black,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
  },
  product: {
    color: theme.colors.primary,
    fontWeight: "700",
  },
  rating: {
    marginTop: 42,
    flex: 1,
  },
}))
