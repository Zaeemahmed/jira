export interface CorePalette {
  lightBlue?: string;
  lightText?: string;
  neutralN40?: string;
  neutralN900?: string;
}

declare module '@mui/material/styles' {
  interface Palette {
    core: CorePalette;
  }

  interface PaletteOptions {
    core?: CorePalette;
  }
}
