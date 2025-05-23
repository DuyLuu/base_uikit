import { StyleProp, ViewStyle } from 'react-native'
import { BoxProps } from '../Box/Box.d'

export interface CardProps extends BoxProps {
  /**
   * Custom style for the card
   */
  style?: StyleProp<ViewStyle>
  
  /**
   * Elevation level of the card (affects shadow)
   * @default 1
   */
  elevation?: number
  
  /**
   * Border radius of the card
   * @default 8
   */
  borderRadius?: number
  
  /**
   * Background color of the card
   * @default 'white'
   */
  backgroundColor?: string
  
  /**
   * Whether the card has a border
   * @default false
   */
  bordered?: boolean
} 