import React from 'react';
import { styled } from '@mui/material';

// const spinderBorderColor = {
//     default:
// }

const StyledSpinner = styled('div')(() => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  border: '3px solid currentColor',
  animation:
    'spinner-bulqg1 0.8s infinite linear alternate, spinner-oaa3wk 1.6s infinite linear',

  '@keyframes spinner-bulqg1': {
    '0%': {
      clipPath: 'polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%)',
    },

    '12.5%': {
      clipPath:
        'polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)',
    },

    '25%': {
      clipPath:
        'polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%)',
    },

    '50%': {
      clipPath:
        'polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)',
    },

    '62.5%': {
      clipPath:
        'polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)',
    },

    '75%': {
      clipPath:
        'polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%)',
    },

    '100%': {
      clipPath:
        'polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%)',
    },
  },

  '@keyframes spinner-oaa3wk': {
    '0%': {
      transform: 'scaleY(1) rotate(0deg)',
    },

    '49.99%': {
      transform: 'scaleY(1) rotate(135deg)',
    },

    '50%': {
      transform: 'scaleY(-1) rotate(0deg)',
    },

    '100%': {
      transform: ' scaleY(-1) rotate(-135deg)',
    },
  },
}));

export const Spinner = () => {
  return <StyledSpinner />;
};
