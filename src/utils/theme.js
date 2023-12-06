import { extract } from 'sass-extract';
import colorsSCSS from '../assets/css/colors.scss';

const colors = extract(colorsSCSS);

const theme = {
  colors: {
    main: colors['$color-main'],
    secondary: colors['$color-secondary'],
    grey: colors['$grey'],
    normal: colors['$normal'],
    lightest: colors['$lightest'],
    light: colors['$light'],
    white: colors['$color-white'],
    purple: colors['$purple'],
    darkRed: colors['$dark-red'],
    lightRed: colors['$light-red'],
  },
};

export default theme;