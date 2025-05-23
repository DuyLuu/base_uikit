import DeviceInfo from 'react-native-device-info'
import { Dimensions, Platform, StatusBar, NativeModules } from 'react-native'

const RNUtils = NativeModules.RNUtils

const STATUSBAR_DEFAULT_HEIGHT = 20
const STATUSBAR_X_HEIGHT = 44
const STATUSBAR_IP12_HEIGHT = 47
const STATUSBAR_IP12MAX_HEIGHT = 47
const STATUSBAR_IP14_HEIGHT = 47

const X_WIDTH = 375
const X_HEIGHT = 812

const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896

const IP12_WIDTH = 390
const IP12_HEIGHT = 844

const IP12MAX_WIDTH = 428
const IP12MAX_HEIGHT = 926

const IP14PRO_HEIGHT = 852
const IP14PROMAX_HEIGHT = 932

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window')

let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV) {
  if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
    statusBarHeight = STATUSBAR_X_HEIGHT
  } else if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
    statusBarHeight = STATUSBAR_X_HEIGHT
  } else if (W_WIDTH === IP12_WIDTH && W_HEIGHT === IP12_HEIGHT) {
    statusBarHeight = STATUSBAR_IP12_HEIGHT
  } else if (W_WIDTH === IP12MAX_WIDTH && W_HEIGHT === IP12MAX_HEIGHT) {
    statusBarHeight = STATUSBAR_IP12MAX_HEIGHT
  } else if (W_WIDTH === IP14PRO_HEIGHT || W_HEIGHT === IP14PRO_HEIGHT) {
    statusBarHeight = STATUSBAR_IP14_HEIGHT
  } else if (W_WIDTH === IP14PROMAX_HEIGHT || W_HEIGHT === IP14PROMAX_HEIGHT) {
    statusBarHeight = STATUSBAR_IP14_HEIGHT
  }
}

// export const DEVICE = {
//   UID: DeviceInfo.getUniqueIdSync(),
//   NAME: DeviceInfo.getDeviceNameSync(),
//   MODEL: DeviceInfo.getModel(), // this is phone type, Ex: Iphone 6
// }

export const APP = {
  VERSION: DeviceInfo.getVersion(),
}

// FIXME: This function is not implemented yet
export const restartApp = () => {}

export const isIphoneX = () => {
  const dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 852 ||
      dimen.width === 852 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926 ||
      dimen.height === 932 ||
      dimen.width === 932)
  )
}

export const ifIphoneX = (iphoneXStyle: number, regularStyle: number) => {
  if (isIphoneX()) {
    return iphoneXStyle
  }
  return regularStyle
}

// Note: use this incase estimated size, since this is not accurate, use insets from react-native-safe-area-context instead
export const getStatusBarHeight = () => {
  return Platform.select({
    ios: statusBarHeight,
    android: StatusBar.currentHeight,
    default: 0,
  })
}

const performance = RNUtils.getDevicePerformance()

export const getDevicePerformance = (): 'high-end' | 'mid-end' | 'low-end' =>
  performance

export const getDevicePerformanceAsIndex = (): number => {
  if (performance === 'high-end' || Platform.OS === 'ios') {
    return 1
  }
  if (performance === 'mid-end') {
    return 2
  }
  return 3
}

export const setBadgeCount = (count: number): void => {
  try {
    if (Platform.OS === 'ios') {
      RNUtils.setBadgeCount(count)
    }
  } catch (e) {}
}

export const getBadgeCount = async (): Promise<number> => {
  if (Platform.OS !== 'ios') return Promise.resolve(0)
  try {
    return RNUtils.getBadgeCount?.()
  } catch {
    return 0
  }
}

export const getSoftMenuBarHeight = (): number =>
  Platform.select({
    android: RNUtils.getSoftMenuBarHeight?.(),
    default: 0,
  })

export const getCPUUsage = (): number => {
  try {
    return RNUtils.getCPUUsage?.()
  } catch {
    return 0
  }
}
