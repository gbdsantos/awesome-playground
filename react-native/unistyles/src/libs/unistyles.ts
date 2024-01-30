import { UnistylesRegistry } from 'react-native-unistyles'
import { breakpoints } from './theme/breakpoints'
import { theme } from './theme'

type AppBreakpoints = typeof breakpoints
type AppThemes = {
  theme: typeof theme
}

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry
  .addBreakpoints(breakpoints)
  .addThemes({
    theme
  })
  .addConfig({
    adaptiveThemes: true
  })
