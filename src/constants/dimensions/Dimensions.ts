import { Dimensions as RNDimensions } from 'react-native'

import { getSoftMenuBarHeight } from '../../utils/device'

const Dimensions = {
  ...RNDimensions.get('screen'),
  softMenuBarHeight: getSoftMenuBarHeight(),
}

export default Dimensions
