import { ColorValue, StyleSheet, View, ViewProps } from 'react-native'
import React, { memo, PropsWithChildren, useMemo } from 'react'
import Animated from 'react-native-reanimated'

import { SHADOW_BOX_WIDTH } from './constants'

export interface ShadowBoxProps extends ViewProps {
  animated?: boolean
  disabled?: boolean
  color?: ColorValue
  border?: boolean
  animatedStyle?: any
  size?: number
}

const ShadowBox = ({
  children,
  animated,
  disabled,
  color,
  style,
  animatedStyle,
  border,
  size = SHADOW_BOX_WIDTH,
  ...props
}: PropsWithChildren<ShadowBoxProps>) => {
  const Wrapper = useMemo(() => (animated ? Animated.View : View) as any, [animated])
  const Container = View as any

  if (disabled || !color)
    return (
      <Wrapper {...props} style={[style, animatedStyle]}>
        {children}
      </Wrapper>
    )

  return (
    <Container
      style={[
        styles.container,
        {
          paddingBottom: size,
        },
      ]}
    >
      <Animated.View
        style={[
          style,
          !!color && { backgroundColor: color },
          styles.shadow,
          {
            top: size,
          },
        ]}
      />
      <Wrapper
        {...props}
        style={[style, border && styles.border, { borderColor: color }, animatedStyle]}
      >
        {children}
      </Wrapper>
    </Container>
  )
}

export default memo(ShadowBox)

const styles = StyleSheet.create({
  container: {
    paddingBottom: SHADOW_BOX_WIDTH,
  },
  border: {
    borderWidth: 1,
  },
  shadow: {
    // ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: SHADOW_BOX_WIDTH,
  },
})
