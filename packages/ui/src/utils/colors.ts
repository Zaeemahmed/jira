export interface CorePalette {
  lightBlue: string;
  lightText: string;
  neutralN0: string;
  neutralN40: string;
  neutralN30: string;
  neutralN900: string;
  neutralN100: string;
  neutralN700: string;
  yellowY200: string;
  yellowY300: string;
  yellowY400: string;
  BlueB300: string;
  BlueB600: string;
  RedR300: string;
  RedR400: string;
  RedR50: string;
  GreenG50: string;
  GreenG300: string;
  GreenG400: string;
  GreenG500: string;
  RedR500: string;
  BlueB500: string;
  neutral30A: string;
  neutral30B: string;
  neutralN20A: string;
  neutralN400: string;
  neutralN500: string;
  neutralN70: string;
  ColorTransparent: string;
}

declare module '@mui/material/styles' {
  interface Palette {
    core: CorePalette;
  }

  interface PaletteOptions {
    core?: CorePalette;
  }
}
