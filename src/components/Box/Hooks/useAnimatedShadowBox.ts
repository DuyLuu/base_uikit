import {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  runOnUI,
} from 'react-native-reanimated'

import { SHADOW_BOX_WIDTH } from '../constants'

const springConfig = {
  damping: 10,
  stiffness: 100,
  overshootClamping: true,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
  mass: 0.1,
}

const useAnimatedShadowBox = (size = SHADOW_BOX_WIDTH) => {
  const animatedValue = useSharedValue<number>(0)
  const springTranslateY = useDerivedValue(() => {
    const interpolation = interpolate(
      animatedValue.value,
      [0, 1],
      [0, size ?? SHADOW_BOX_WIDTH],
    )
    return withSpring(interpolation, springConfig)
  })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: springTranslateY.value }],
    }
  })

  const onPressIn = () => {
    runOnUI(() => {
      animatedValue.value = 1
    })()
  }

  const onPressOut = () => {
    runOnUI(() => {
      animatedValue.value = 0
    })()
  }

  return {
    onPressIn,
    onPressOut,
    animatedStyle,
  }
}

export default useAnimatedShadowBox
