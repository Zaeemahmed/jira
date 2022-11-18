import React from 'react';
import { Badge, BadgeProps, styled } from '@mui/material';
import {
  AwayIcon,
  BusyIcon,
  LockIcon,
  OnlineIcon,
  ApproveIcon,
  DeclineIcon,
  OfflineIcon,
} from '../Icons';

const userStatus = {
  approve: <ApproveIcon />,
  decline: <DeclineIcon />,
  locked: <LockIcon />,
  none: null,
};

const userPresence = {
  online: <OnlineIcon />,
  busy: <BusyIcon />,
  away: <AwayIcon />,
  offline: <OfflineIcon />,
  none: null,
};

type BadgesProps = BadgeProps & {
  horizontal?: 'left' | 'right';
  status?: 'approve' | 'decline' | 'locked' | 'none';
  presence?: 'online' | 'busy' | 'away' | 'offline' | 'none';
  variant: 'dot' | 'standard';
};

const StyledBadge = styled(Badge)(() => ({
  '.MuiBadge-badge': {
    top: '2px',
    right: '5px',
  },
}));

export const AvatarBadge = ({
  children,
  horizontal,
  status,
  presence,
  variant,
  ...rest
}: BadgesProps) => {
  const userActivity = status
    ? userStatus[status || 'none']
    : userPresence[presence || 'none'];

  return (
    <StyledBadge
      {...rest}
      variant={variant}
      badgeContent={userActivity}
      anchorOrigin={{
        vertical: status ? 'top' : 'bottom',
        horizontal: horizontal || 'right',
      }}
    >
      {children}
    </StyledBadge>
  );
};
