import { createTheme, Theme } from '@mui/material';
import { PaletteOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { createSpacing } from '@mui/system';

const paletteOptions: PaletteOptions = {
  core: {
    lightBlue: '#4C9AFF',
    lightText: '#6B778C',
    neutralN0: '#FFFFFF',
    neutralN30: '#EBECF0',
    neutralN40: '#DFE1E6',
    neutralN900: '#091E42',
    neutralN100: '#42526E',
    neutralN700: '#253858',
    yellowY200: '#FFC400',
    yellowY300: '#FFAB00',
    yellowY400: '#FF991F',
    BlueB300: '#0065FF',
    BlueB500: '#0747A6',
    BlueB600: '#0052CC',
    RedR300: '#FF5630',
    RedR400: '#DE350B',
    RedR50: '#FFEBE6',
    RedR500: '#BF2600',
    GreenG50: '#E3FCEF',
    GreenG300: '#36B37E',
    GreenG400: '#00875A',
    GreenG500: '#006644',
    neutralN20A: 'rgba(9, 30, 66, 0.04)',
    neutral30A: ' rgba(9, 30, 66, 0.08)',
    neutral30B: 'rgba(179, 212, 255, 0.6)',
    neutralN400: '#505F79',
    neutralN500: '#42526E',
    neutralN70: '#A5ADBA',
    ColorTransparent: 'rgba(255, 255, 255, 0.0001)',
  },
};

const typographyOptions: TypographyOptions = {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightBold: 600,
};

const spacing = createSpacing(8);

function getTheme(): Theme {
  return createTheme({
    palette: paletteOptions,
    typography: typographyOptions,
    spacing: spacing,
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 760,
        lg: 1024,
        xl: 1200,
      },
    },
  });
}

export const theme = getTheme();
