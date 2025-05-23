import React, { memo } from 'react'

import OptimizedView from './OptimizedView'
import { BoxProps } from './Box.d'
import withBox from './withBox'

const Box = ({ children, style, boxStyles, ...rest }: BoxProps) => {
  return (
    <OptimizedView {...rest} style={[boxStyles, style]}>
      {children}
    </OptimizedView>
  )
}

export default memo(withBox(Box))
