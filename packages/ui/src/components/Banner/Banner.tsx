import React, { ReactNode, ReactElement } from 'react';
import { styled, Box } from '@mui/material';
import { theme } from '../../utils/theme';

const AppearanceType = {
  warning: theme.palette.core.yellowY300,
  error: theme.palette.core.RedR400,
  announcement: theme.palette.core.neutralN100,
};

interface BannerProps {
  appearance: 'warning' | 'error' | 'announcement';
  children: ReactNode;
  icon?: ReactElement;
}

const StyledBanner = styled(Box)<BannerProps>(({ appearance }) => ({
  color:
    appearance === 'warning'
      ? theme.palette.core.neutralN700
      : theme.palette.core.neutralN0,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontFamily: theme.typography.fontFamily,
  backgroundColor: AppearanceType[appearance],
  padding: '16px',
  '& a': {
    color: 'inherit',
  },
}));

export const Banner = ({ appearance, children, icon }: BannerProps) => {
  return (
    <StyledBanner appearance={appearance}>
      {icon}
      {children}
    </StyledBanner>
  );
};
