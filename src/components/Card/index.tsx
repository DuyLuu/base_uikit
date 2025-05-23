import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import Box from '../Box/Box'
import ShadowBox from '../Box/ShadowBox'
import { CardProps } from './Card'

const Card: React.FC<CardProps> = ({
  children,
  style,
  elevation = 1,
  borderRadius = 8,
  backgroundColor = 'white',
  bordered = false,
  ...props
}) => {
  const cardStyle: ViewStyle = {
    backgroundColor,
    borderRadius,
    overflow: 'hidden',
  }

  return (
    <ShadowBox
      style={[styles.card, cardStyle, style]}
      color={backgroundColor}
      size={elevation}
      border={bordered}
      {...props}
    >
      {children}
    </ShadowBox>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
})

export default Card
