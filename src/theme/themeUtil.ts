import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const normalizeFontSize = (fontSize: number) => {
  const scale = screenWidth / 375;

  const newFontSize = fontSize * scale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newFontSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newFontSize)) - 2;
  }
};

export const themeUtil = {
  normalizeFontSize,
};
