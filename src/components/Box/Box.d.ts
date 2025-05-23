import {
  Falsy,
  StyleProp,
  TextStyle,
  ViewStyle,
  AccessibilityProps,
} from 'react-native'
import * as React from 'react'

import { Spacing } from '../../theme'

type SpacingType = Spacing | Falsy

enum BoxKey {
  margin = 'margin',
  marginHorizontal = 'marginHorizontal',
  marginVertical = 'marginVertical',
  marginTop = 'marginTop',
  marginBottom = 'marginBottom',
  marginRight = 'marginRight',
  marginLeft = 'marginLeft',

  padding = 'padding',
  paddingHorizontal = 'paddingHorizontal',
  paddingVertical = 'paddingVertical',
  paddingTop = 'paddingTop',
  paddingBottom = 'paddingBottom',
  paddingRight = 'paddingRight',
  paddingLeft = 'paddingLeft',
}

export const BOX_KEYS = Object.keys(BoxKey)

export interface BoxProps
  extends React.PropsWithChildren<any>,
    AccessibilityProps {
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>
  boxStyles?: StyleProp<ViewStyle>

  // row styles
  row?: boolean
  rowReverse?: boolean
  alignItemsCenter?: boolean
  spaceBetween?: boolean
  spaceAround?: boolean
  center?: boolean
  flex1?: boolean
  spacing?: keyof Spacing

  margin?: keyof Spacing
  marginHorizontal?: keyof Spacing
  marginVertical?: keyof Spacing
  marginTop?: keyof Spacing
  marginBottom?: keyof Spacing
  marginRight?: keyof Spacing
  marginLeft?: keyof Spacing

  padding?: keyof Spacing
  paddingHorizontal?: keyof Spacing
  paddingVertical?: keyof Spacing
  paddingTop?: keyof Spacing
  paddingBottom?: keyof Spacing
  paddingRight?: keyof Spacing
  paddingLeft?: keyof Spacing
}
