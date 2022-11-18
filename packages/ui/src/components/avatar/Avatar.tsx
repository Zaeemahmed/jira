import React from 'react';
import { Avatar, AvatarProps } from '@mui/material';
import { BrokenImage } from '@mui/icons-material';
import { AvatarBadge } from './AvatarBadge';

const avatarSize = {
  xxl: '128px',
  xl: '96px',
  large: '40px',
  normal: '30px',
  xs: '16px',
};

type AvatarsProps = AvatarProps & {
  size: 'xxl' | 'xl' | 'large' | 'normal' | 'xs';
  variant: 'circular' | 'rounded' | 'square';
};

export const Avatars = ({ src, size, variant, ...rest }: AvatarsProps) => {
  return (
    <AvatarBadge status='locked' variant='standard'>
      <Avatar
        {...rest}
        src={src}
        sx={{
          height: avatarSize[size],
          width: avatarSize[size],
          cursor: 'pointer',
        }}
        variant={variant}
      >
        <BrokenImage />
      </Avatar>
    </AvatarBadge>
  );
};
