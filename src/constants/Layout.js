import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  spacing: {
      xs: 2,
      sm: 4,
      md: 8,
      lg: 24,
      xl: 36
  }
};
