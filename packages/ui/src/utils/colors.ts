export interface CorePalette {
  lightBlue?: string;
  lightText?: string;
  white?: string;
  blue?: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    core: CorePalette;
  }

  interface PaletteOptions {
    core?: CorePalette;
  }
}
