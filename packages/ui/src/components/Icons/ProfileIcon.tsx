import * as React from 'react';
import { styled } from '@mui/material';

interface profileProps {
  nameFirstLetter: string;
}

const StyledProfileIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
  height: '24px',
  width: '24px',
  borderRadius: '50%',
  backgroundColor: theme.palette.core.neutralN900,
}));

export const ProfileIcon = ({ nameFirstLetter }: profileProps) => {
  return <StyledProfileIcon>{nameFirstLetter.slice(0, 1)}</StyledProfileIcon>;
};
