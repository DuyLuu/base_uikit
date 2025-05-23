import * as React from 'react'
import { StyleSheet } from 'react-native'
import { omit, pick } from 'lodash'

import { Theme } from '../../theme'

import { BoxProps } from './Box.d'

export const useBoxProps = ({
  margin,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,

  padding,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  row,
  rowReverse,
  alignItemsCenter,
  spaceBetween,
  spaceAround,
  center,
  flex1,
  spacing,
}: BoxProps) => {
  return React.useMemo(() => {
    return [
      styles.default,
      margin && Theme.spacing[margin] && { margin: Theme.spacing[margin] },
      marginHorizontal &&
        Theme.spacing[marginHorizontal] && {
          marginHorizontal: Theme.spacing[marginHorizontal],
        },
      marginVertical &&
        Theme.spacing[marginVertical] && {
          marginVertical: Theme.spacing[marginVertical],
        },
      marginTop && Theme.spacing[marginTop] && { marginTop: Theme.spacing[marginTop] },
      marginBottom &&
        Theme.spacing[marginBottom] && {
          marginBottom: Theme.spacing[marginBottom],
        },
      marginRight &&
        Theme.spacing[marginRight] && {
          marginRight: Theme.spacing[marginRight],
        },
      marginLeft &&
        Theme.spacing[marginLeft] && {
          marginLeft: Theme.spacing[marginLeft],
        },
      padding && Theme.spacing[padding] && { padding: Theme.spacing[padding] },
      paddingHorizontal &&
        Theme.spacing[paddingHorizontal] && {
          paddingHorizontal: Theme.spacing[paddingHorizontal],
        },
      paddingVertical &&
        Theme.spacing[paddingVertical] && {
          paddingVertical: Theme.spacing[paddingVertical],
        },
      paddingTop &&
        Theme.spacing[paddingTop] && {
          paddingTop: Theme.spacing[paddingTop],
        },
      paddingBottom &&
        Theme.spacing[paddingBottom] && {
          paddingBottom: Theme.spacing[paddingBottom],
        },
      paddingRight &&
        Theme.spacing[paddingRight] && {
          paddingRight: Theme.spacing[paddingRight],
        },
      paddingLeft &&
        Theme.spacing[paddingLeft] && {
          paddingLeft: Theme.spacing[paddingLeft],
        },
      row && styles.row,
      rowReverse && styles.rowReverse,
      alignItemsCenter && styles.alignItemsCenter,
      spaceBetween && styles.spaceBetween,
      spaceAround && styles.spaceAround,
      center && styles.center,
      flex1 && styles.flex1,
      spacing && { gap: Theme.spacing[spacing] },
    ]
  }, [
    alignItemsCenter,
    center,
    flex1,
    margin,
    marginBottom,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginTop,
    marginVertical,
    padding,
    paddingBottom,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingVertical,
    row,
    rowReverse,
    spaceAround,
    spaceBetween,
    spacing,
  ])
}

const withBox =
  <T extends BoxProps>(
    Component: React.ComponentType<Omit<T, keyof BoxProps>>,
    overrideProps: string[] = []
  ) =>
  ({
    margin,
    marginHorizontal,
    marginVertical,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,

    padding,
    paddingHorizontal,
    paddingVertical,
    paddingTop,
    paddingBottom,
    paddingRight,
    paddingLeft,
    row,
    rowReverse,
    alignItemsCenter,
    spaceBetween,
    spaceAround,
    center,
    flex1,
    spacing,
    ...removedProps
  }: T) => {
    const boxProps = {
      margin,
      marginHorizontal,
      marginVertical,
      marginTop,
      marginBottom,
      marginRight,
      marginLeft,

      padding,
      paddingHorizontal,
      paddingVertical,
      paddingTop,
      paddingBottom,
      paddingRight,
      paddingLeft,
      row,
      rowReverse,
      alignItemsCenter,
      spaceBetween,
      spaceAround,
      center,
      flex1,
      spacing,
    }

    const boxStyles = useBoxProps(omit(boxProps, overrideProps))

    return (
      <Component
        {...(removedProps as Omit<T, keyof BoxProps>)}
        {...pick(boxProps, overrideProps)}
        boxStyles={boxStyles}
      />
    )
  }

export default withBox

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  rowReverse: { flexDirection: 'row-reverse' },
  alignItemsCenter: { alignItems: 'center' },
  spaceBetween: { justifyContent: 'space-between' },
  spaceAround: { justifyContent: 'space-around' },
  center: { justifyContent: 'center' },
  flex1: { flex: 1 },
  default: { borderCurve: 'continuous' },
})
