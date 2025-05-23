import React, { PureComponent } from 'react'
import { ViewProps, StyleSheet, Platform } from 'react-native'
// @ts-ignore
import View from 'react-native/Libraries/Components/View/ViewNativeComponent'

class OptimizedView extends PureComponent<ViewProps> {
  render() {
    const { children, style, accessibilityElementsHidden, ...restProps } =
      this.props

    return (
      <View
        accessible={false}
        {...(Platform.OS === 'android' &&
          accessibilityElementsHidden && {
            importantForAccessibility: 'no-hide-descendants',
          })}
        {...restProps}
        style={StyleSheet.flatten(style)}>
        {children}
      </View>
    )
  }
}

export default OptimizedView
