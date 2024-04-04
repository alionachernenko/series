import {StyleProp, TextStyle} from 'react-native';
import {fonts} from '.';
import {themeUtil} from '.';

const title_5: StyleProp<TextStyle> = {
  fontFamily: fonts.nunitoSans.bold,
  fontSize: 24,
  lineHeight: 24,
  fontWeight: '700'
};

const caption_3: StyleProp<TextStyle> = {
  fontFamily: fonts.nunitoSans.extraBold,
  fontSize: 11,
  lineHeight: 14,
  fontWeight: '800',
};

export const typography = {
  title_5,
  caption_3,
};
