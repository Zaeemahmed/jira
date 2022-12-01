import React, { ReactNode, useState } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Buttons } from '../Button';
import { CrossIcon, ChevronDown, ChevronUp } from '../Icons';

interface flagsProps {
  appearance?: 'error' | 'info' | 'normal' | 'warning';
  icon: ReactNode;
  title: string;
  description: string;
  userAction?: Array<object>;
  type?: 'default' | 'expand';
}

const StyledFlags = styled(Box)<flagsProps>(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'flex-start',
  gap: '16px',
  padding: '18px 0 18px 16px',
  border: '1px solid black',
  borderRadius: '3px',
  '& button:first-of-type': {
    height: '24px',
  },
}));

export const Flags = ({
  title,
  description,
  userAction,
  icon,
  type,
  appearance,
}: flagsProps) => {
  const [expand, setExpand] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleExpend = () => {
    setExpand(!expand);
  };

  const handleDismissed = () => {
    setDismissed(!dismissed);
  };

  return (
    <>
      {!dismissed ? (
        <StyledFlags component='div'>
          {type === 'default' ? (
            <Buttons
              appearance='none'
              onClick={handleDismissed}
              style={{ order: 1 }}
            >
              <CrossIcon />
            </Buttons>
          ) : (
            <Buttons
              appearance='none'
              onClick={handleExpend}
              style={{ order: 1 }}
            >
              {expand ? <ChevronUp /> : <ChevronDown />}
            </Buttons>
          )}
          <Box>{icon}</Box>
          <Box component='div'>
            <Typography variant='body1'>{title}</Typography>
            {!expand && <Typography variant='body2'>{description}</Typography>}
            {!expand && (
              <Box>
                {userAction
                  ? userAction?.map(({ content, onClick, href, key }) => {
                      return (
                        <Buttons
                          key={key}
                          appearance='link'
                          onClick={onClick}
                          href={href}
                        >
                          {content}
                        </Buttons>
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
