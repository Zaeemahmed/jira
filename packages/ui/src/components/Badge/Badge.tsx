import React, { ReactNode } from 'react';
import { styled, Box } from '@mui/material';
import { theme } from '../../utils/theme';

const BadgeAppearance = {
  default: theme.palette.core.neutralN0,
  primary: theme.palette.core.BlueB600,
  primaryInvert: theme.palette.core.neutralN0,
  important: theme.palette.core.RedR400,
  added: theme.palette.core.GreenG50,
  removed: theme.palette.core.RedR50,
};

const BadgeFontColor = {
  default: theme.palette.core.neutralN900,
  primary: theme.palette.core.neutralN0,
  primaryInvert: theme.palette.core.BlueB500,
  important: theme.palette.core.neutralN0,
  added: theme.palette.core.GreenG500,
  removed: theme.palette.core.RedR500,
};

interface BadgeProps {
  appearance:
    | 'default'
    | 'primary'
    | 'primaryInvert'
    | 'important'
    | 'added'
    | 'removed';
  children: ReactNode;
  max: number | boolean;
}

const StyledBadge = styled(Box)<BadgeProps>(({ appearance, theme }) => ({
  fontFamily: theme.typography.fontFamily,
  borderRadius: '8px',
  backgroundColor: BadgeAppearance[appearance],
  color: BadgeFontColor[appearance],
  padding: '0 6px',
  fontSize: '12px',
}));

export const Badge = ({ appearance, children, max }: BadgeProps) => {
  const maxValue = max && children && children > max ? `${max}+` : children;

  return (
    <StyledBadge component='span' appearance={appearance} max={max}>
      {maxValue}
    </StyledBadge>
  );
};
