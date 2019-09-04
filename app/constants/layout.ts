import { Dimensions } from 'react-native';

export const { width: windowWidth } = Dimensions.get('window');
export const isSmallScreen = windowWidth < 481;
export const isMediumScreen = windowWidth < 768;
export const maxWidth = 1200;
