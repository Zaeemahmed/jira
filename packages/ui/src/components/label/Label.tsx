import React from 'react';
import { Typography, useTheme } from '@mui/material';

export interface LabelProps {
  labelText: string;
  htmlFor?: string;
}

export const Label = ({ labelText, htmlFor }: LabelProps) => {
  const theme = useTheme();
  return (
    <Typography
      display='block'
      component='label'
      fontFamily={theme.typography.fontFamily}
      color={theme.palette.core?.lightText}
      fontWeight={theme.typography.fontWeightBold}
      fontSize='12px'
      lineHeight='16px'
      htmlFor={htmlFor}
    >
      {labelText}
    </Typography>
  );
};
