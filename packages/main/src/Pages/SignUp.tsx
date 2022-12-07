import React from 'react';
import { Logo, Buttons } from '../../../ui/src/components';
import { styled, Box } from '@mui/material';

const StyledSignUpContainer = styled('div')(({}) => ({
  height: '100vh',
}));
export const SignUp = () => {
  return (
    <StyledSignUpContainer>
      <header>
        <Logo size='large' />
      </header>
      <Box component='div'></Box>
      <footer>
        <Logo size='small' />
        <p>
          One account for Jira, Confluence, Trello and{' '}
          <Buttons appearance='link'>more</Buttons>
        </p>
      </footer>
    </StyledSignUpContainer>
  );
};
