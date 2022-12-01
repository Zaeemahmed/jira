import React, { ReactElement } from 'react';
import {
  ButtonBase as Button,
  ButtonBaseProps as ButtonProps,
  styled,
} from '@mui/material';
import { theme } from '../../utils/theme';
import { Spinner } from '../Icons/Spinner';

const ButtonAppearanceType = {
  default: theme.palette.core.neutralN20A,
  danger: theme.palette.core.RedR400,
  link: theme.palette.core.ColorTransparent,
  primary: theme.palette.core.BlueB600,
  warning: theme.palette.core.yellowY300,
  subtle: theme.palette.core.ColorTransparent,
  subtleLink: theme.palette.core.ColorTransparent,
  none: theme.palette.core.neutralN0,
};

const ButtonHoverEffect = {
  default: theme.palette.core.neutral30A,
  link: theme.palette.core.ColorTransparent,
  primary: theme.palette.core.BlueB300,
  warning: theme.palette.core.yellowY200,
  danger: theme.palette.core.RedR300,
  subtleLink: theme.palette.core.ColorTransparent,
  subtle: theme.palette.core.neutralN20A,
  none: theme.palette.core.neutralN0,
};

const ButtonActiveEffect = {
  default: theme.palette.core.neutral30B,
  primary: theme.palette.core.BlueB500,
  warning: theme.palette.core.yellowY400,
  danger: theme.palette.core.RedR500,
  link: theme.palette.core.BlueB500,
  subtleLink: theme.palette.core.ColorTransparent,
  subtle: theme.palette.core.neutralN400,
  none: theme.palette.core.neutralN0,
};

type ButtonsProps = ButtonProps & {
  appearance:
    | 'default'
    | 'danger'
    | 'link'
    | 'primary'
    | 'warning'
    | 'subtle'
    | 'subtleLink'
    | 'none';
  Icon?: ReactElement;
  iconbefore?: boolean;
  href?: string;
  isLoading?: boolean;
};

const StyledButtons = styled(Button)<ButtonsProps>(
  ({ theme, appearance, iconbefore, disabled, href, isLoading }) => ({
    position: 'relative',
    pointerEvents: disabled || isLoading ? 'none' : 'auto',
    alignItems: 'center',
    flexDirection: iconbefore ? 'row' : 'row-reverse',
    gap: '4px',
    backgroundColor: ButtonAppearanceType[appearance],
    borderRadius: '3px',
    padding: '6px 12px',
    fontFamily: theme.typography.fontFamily,
    fontSize: '14px',
    fontWeight: theme.typography.fontWeightMedium,
    color:
      appearance === 'danger' || appearance === 'primary'
        ? theme.palette.core.neutralN0
        : theme.palette.core.neutralN500,
    textAlign: 'center',
    transition: 'all 0.4s',
    '&:hover': {
      backgroundColor: ButtonHoverEffect[appearance],
      textDecoration:
        appearance === 'link' || appearance === 'subtleLink' ? 'underline' : '',
      color:
        appearance === 'link' || appearance === 'subtleLink'
          ? theme.palette.core.BlueB300
          : '',
    },
    '&:active': {
      BackgroundColor: ButtonActiveEffect[appearance],
    },
    '&:disabled': {
      backgroundColor: theme.palette.core.neutralN20A,
      color: theme.palette.core.neutralN70,
    },
    '&:visited': {
      backgroundColor:
        appearance === 'warning' || appearance === 'danger'
          ? ButtonActiveEffect[appearance]
          : theme.palette.core.neutralN700,
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      backgroundColor: disabled && href ? 'rgba(255, 255, 255, 0.25)' : '',
      width: '100%',
      height: '100%',
    },
    '& svg': {
      opacity: disabled ? '40%' : '100%',
    },
  }),
);

export const Buttons = ({
  appearance = 'default',
  href,
  children,
  Icon,
  isLoading,
  iconbefore,
  ...prop
}: ButtonsProps) => {
  return (
    <StyledButtons
      appearance={appearance}
      href={href}
      {...prop}
      disableRipple={true}
      LinkComponent='a'
      iconbefore={iconbefore}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {Icon}
          {children}
        </>
      )}
    </StyledButtons>
  );
};
