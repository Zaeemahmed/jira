import React, { ReactNode, useEffect, useState } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Buttons } from '../Button';
import {
  CrossIcon,
  ChevronDown,
  ChevronUp,
  Warning,
  Error,
  Info,
  SuccessIcon,
} from '../Icons';
import { theme } from '../../utils/theme';

const FlagsAppearanceType = {
  success: theme.palette.core.GreenG400,
  error: theme.palette.core.RedR400,
  info: theme.palette.core.neutralN500,
  warning: theme.palette.core.yellowY200,
  normal: theme.palette.core.neutralN0,
};

const IconTypes = {
  success: <SuccessIcon />,
  error: <Error />,
  info: <Info />,
  warning: <Warning />,
};

interface flagsProps {
  appearance: 'error' | 'info' | 'warning' | 'normal';
  icon: 'error' | 'info' | 'success' | 'warning';
  title: string;
  description: string;
  userAction?: Array<object>;
  type?: 'default' | 'expand';
}

const StyledFlags = styled(Box)<flagsProps>(({ theme, appearance }) => ({
  maxWidth: '400px',
  backgroundColor: FlagsAppearanceType[appearance],
  fontFamily: theme.typography.fontFamily,
  display: 'inline-flex',
  alignItems: 'flex-start',
  gap: '16px',
  padding: '18px 4px 12px 16px',
  borderRadius: '3px',
  boxShadow:
    '0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)',
  '& #closeBtn': {
    height: '24px',
    backgroundColor: 'inherit',
    color:
      appearance === 'warning' || appearance === 'normal'
        ? theme.palette.core.neutralN500
        : theme.palette.core.neutralN0,
  },

  '& #actionBtn': {
    backgroundColor:
      appearance !== 'normal' ? 'rgba(255, 255, 255, 0.08)' : 'inherit',
    color:
      appearance === 'warning' || appearance === 'normal'
        ? theme.palette.core.neutralN500
        : theme.palette.core.neutralN0,
    '&:hover': {
      textDecoration: appearance === 'normal' ? 'underline' : 'none',
    },
  },
  color:
    appearance === 'warning' || appearance === 'normal'
      ? theme.palette.core.neutralN500
      : theme.palette.core.neutralN0,
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: theme.typography.fontWeightBold,
  lineHeight: '20px',
  marginBottom: '4px',
}));

const StyledActionButton = styled(Buttons)(({ theme }) => ({
  color: theme.palette.core.BlueB500,
  fontSize: '14px',
  fontWeight: theme.typography.fontWeightBold,
  lineHeight: '20px',
}));

export const Flags = ({
  title,
  description,
  userAction,
  icon = 'success',
  type,
  appearance,
}: flagsProps) => {
  const [expand, setExpand] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleExpend = () => {
    setExpand((prev) => !prev);
  };

  const handleDismissed = () => {
    setDismissed((prev) => !prev);
  };

  useEffect(() => {
    let removeFlag: NodeJS.Timeout | undefined;
    if (type === 'expand') {
      removeFlag = setTimeout(() => {
        setDismissed((prev) => !prev);
      }, 6000);
    }
    return () => clearTimeout(removeFlag);
  }, [type]);

  return (
    <>
      {!dismissed ? (
        <StyledFlags component='div' appearance={appearance}>
          {type === 'default' ? (
            <Buttons
              id='closeBtn'
              appearance='none'
              onClick={handleDismissed}
              style={{ order: 1 }}
            >
              <CrossIcon />
            </Buttons>
          ) : (
            <Buttons
              id='closeBtn'
              appearance='none'
              onClick={handleExpend}
              style={{ order: 1 }}
            >
              {expand ? <ChevronUp /> : <ChevronDown />}
            </Buttons>
          )}
          <Box>{IconTypes[icon]}</Box>
          <Box component='div'>
            <StyledTitle variant='body1'>{title}</StyledTitle>
            {!expand && <Typography variant='body2'>{description}</Typography>}
            {!expand && (
              <Box
                style={{
                  marginLeft: '-12px',
                  display: 'flex',
                  gap: '8px',
                  marginTop: '8px',
                }}
              >
                {userAction
                  ? userAction?.map(({ content, onClick, href, key }) => {
                      return (
                        <StyledActionButton
                          id='actionBtn'
                          key={key}
                          appearance='link'
                          onClick={onClick}
                          href={href}
                        >
                          {content}
                        </StyledActionButton>
                      );
                    })
                  : null}
              </Box>
            )}
          </Box>
        </StyledFlags>
      ) : null}
    </>
  );
};
