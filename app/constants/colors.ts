import { isDarkMode } from '../helpers';

const themeColors = {
  blue: '#00b9f1',
  yellow: isDarkMode() ? '#252526' : '#f9c00c',
  purple: '#7200da',
  red: `hsl(9,79%,${isDarkMode() ? '63' : '53'}%)`,
};

const lightTheme = {
  background: '#ffffff',
  foreground: '#000000',
  ...themeColors,
};

const darkTheme = {
  background: '#333638',
  foreground: '#eff2f3',
  ...themeColors,
};

export default isDarkMode() ? darkTheme : lightTheme;
