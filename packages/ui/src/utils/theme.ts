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
