import { colors } from './colors';
import { spinnerLightTheme } from '../../components/Spinner/themes/lightTheme';

export const lightTheme = {
  name: 'light',
  version: 1,
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48],
  colors,
  shadows: {
    none: 'none',
  },
  fonts: {},
  spinner: spinnerLightTheme,
};
