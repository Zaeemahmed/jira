import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

import { theme } from "./theme";

export interface ThemeProviderProps {
  children: JSX.Element;
}

export const ThemeProvider: React.FC = ({ children }: ThemeProviderProps) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
