import DeviceInfo from 'react-native-device-info'

export const HEADER_HEIGHT = 40

export const IS_TABLET = DeviceInfo.isTablet()

export const TABLET_RATIO = IS_TABLET ? 1.33 : 1
export const TABLET_RATIO_LINE_HEIGHT = IS_TABLET ? 1.5 : 1

import Dimensions from './Dimensions'
export default Dimensions
