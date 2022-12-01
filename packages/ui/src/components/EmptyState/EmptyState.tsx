import React, { ReactNode } from 'react';
import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface EmptyStateProps {
  header: string;
  description?: ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  maxImageWidth?: number;
  maxImageHeight?: number;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  tertiaryAction?: ReactNode;
  renderImage?: ReactNode;
  isLoading?: boolean;
  Hwidth?: 'wide' | 'narrow';
}

const StyledEmptyState = styled(Box)<EmptyStateProps>(({ theme, Hwidth }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  maxWidth: Hwidth === 'wide' ? '464px' : '304px',
  '& h3': {
    marginBottom: '16px',
    fontFamily: theme.typography.fontFamily,
    fontSize: '20px',
    fontWeight: theme.typography.fontWeightMedium,
    textAlign: 'center',
  },

  '& p': {
    marginBottom: '24px',
    fontFamily: theme.typography.fontFamily,
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'center',
  },
}));

const StyledImageBox = styled('div')(({}) => ({
  marginBottom: '24px',
}));

const StyledActionContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '4px',
  marginBottom: '8px',
}));

export const EmptyState = ({
  Hwidth = 'wide',
  header,
  description,
  imageUrl,
  imageAlt,
  maxImageHeight = 160,
  maxImageWidth = 160,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  renderImage,
  isLoading = true,
}: EmptyStateProps) => {
  return (
    <StyledEmptyState component='div' Hwidth={Hwidth} header={header}>
      <StyledImageBox className='imageBox'>
        {(
          <img
            src={imageUrl}
            alt={imageAlt}
            width={maxImageHeight}
            height={maxImageWidth}
          />
        ) || renderImage}
      </StyledImageBox>
      <Box component='div'>
        <Typography variant='h3'>{header}</Typography>
        <Typography variant='body1'>{description}</Typography>
        <StyledActionContainer component='div'>
          {primaryAction}
          {secondaryAction}
        </StyledActionContainer>
        <Box component='div' style={{ textAlign: 'center' }}>
          {tertiaryAction}
        </Box>
      </Box>
    </StyledEmptyState>
  );
};
