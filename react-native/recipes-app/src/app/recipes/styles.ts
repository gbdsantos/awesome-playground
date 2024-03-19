import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginBottom: 12,
    paddingHorizontal: 32,
    paddingTop: 62
  },
  title: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.md,
    marginTop: 22
  },
  recipes: {
    padding: 32
  },
  recipesContent: {
    gap: 16
  }
});
