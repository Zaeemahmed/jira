import React from "react";
import { Typography, useTheme } from "@mui/material";

export interface LabelProps {
  labelText: string;
}

export const Label = ({ labelText }: LabelProps) => {
  const theme = useTheme();
  return (
    <Typography
      fontFamily={theme.typography.fontFamily}
      color={theme.palette.core.lightText}
    >
      {labelText}
    </Typography>
  );
};
