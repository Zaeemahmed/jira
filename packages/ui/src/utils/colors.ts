export interface CorePalette {
  lightBlue?: string;
  lightText?: string;
  neutralN0: string;
  neutralN40?: string;
  neutralN30?: string;
  neutralN900?: string;
  neutralN100?: string;
  white?: string;
  blue?: string;
}

declare module '@mui/material/styles' {
  interface Palette {
    core: CorePalette;
  }

  interface PaletteOptions {
    core?: CorePalette;
  }
}
