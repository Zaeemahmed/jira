import { styled, Box } from '@mui/material';
import React, { ReactNode, ReactElement } from 'react';
import { theme } from '../../utils/theme';


const AppearanceType = {
    warning: theme.palette.core.yellowY300
    error:theme.palette.core.
}


interface BannerProps {
  appearance: 'warning' | 'error' | 'announcement';
  children: ReactNode;
  icon: ReactElement;
}

const StyledBanner = styled(Box)<BannerProps>(({ appearance }) => ({

    backgroundColor:



}));

export const Banner = ({ appearance, children, icon }: BannerProps) => {
  return (
    <Box>
      {icon}
      {children}
    </Box>
  );
};
