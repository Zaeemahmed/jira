export interface CorePalette {
  lightBlue?: string;
  lightText?: string;
  neutralN0: string;
  neutralN40?: string;
  neutralN30?: string;
  neutralN900?: string;
  neutralN100?: string;
  neutralN700?: string;
  yellowY300?: string;
  white?: string;
  blue?: string;
  BlueB600?: string;
  RedR400?: string;
  RedR50?: string;
  GreenG50?: string;
  GreenG500?: string;
  RedR500?: string;
  BlueB500?: string;
}

declare module '@mui/material/styles' {
  interface Palette {
    core: CorePalette;
  }

  interface PaletteOptions {
    core?: CorePalette;
  }
}
