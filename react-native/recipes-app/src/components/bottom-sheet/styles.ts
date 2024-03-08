import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: theme.colors.black,
    borderRadius: theme.borderRadius.lg,
    bottom: 24,
    position: "absolute",
    padding: 24,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 34,
  },
  label: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular
  }
});
