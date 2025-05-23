import { colors } from './colors'
import { typography } from './typography'
import { spacing } from './spacing'

export const Theme = {
  colors,
  typography,
  spacing,
}

export type Theme = typeof Theme

export * from './colors';
export * from './typography';
export * from './spacing'; 