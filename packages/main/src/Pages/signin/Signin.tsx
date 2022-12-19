import React, { useContext, useEffect, useRef, useState } from 'react';
import { Logo, HookFormTextedField, Buttons, EmptyState } from 'ui/components';
import emailjs from '@emailjs/browser';
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Link,
} from 'react-router-dom';

import {
  ButtonContainer,
  ElementContainer,
  StyledBox,
  StyledHeader,
  StyledSignUpContainer,
} from '../signup/styles';
import {
  LoginMutationVariables,
  useGetUserLazyQuery,
  useLoginMutation,
} from '../../utils/__generated__/graphql';
import { AuthContext } from '../../context/Auth';

export const SignIn = () => {
  const { control, handleSubmit, watch } = useForm<LoginMutationVariables>();
  const [getUser] = useGetUserLazyQuery();
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const email = watch('email');

  const onSubmit = async (data: LoginMutationVariables) => {
    if (!isEmailVerified) {
      const user = await getUser({ variables: { email } });
      console.log(user);
      if (user?.data?.getUser?.id) {
        setIsEmailVerified(true);
      } else if (user?.error) {
      }
    }
    if (isEmailVerified) {
      auth?.onLogin(data);
    }
  };

  if (!auth?.initialized) {
    return <>Loading....</>;
  }

  if (auth?.token) {
    navigate('/');
  }

  return (
    <StyledSignUpContainer>
      <StyledHeader>
        <Logo size='large' />
      </StyledHeader>

      <StyledBox>
        <Typography textAlign='center' variant='h6'>
          sign in to your account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ElementContainer>
            <HookFormTextedField
              labelText='Text'
              control={control}
              name='email'
              placeholder='Enter email'
              disabled={isEmailVerified}
            />
          </ElementContainer>
          {isEmailVerified && (
            <ElementContainer>
              <HookFormTextedField
                labelText='Text'
                control={control}
                name='password'
                placeholder='Password'
                type='password'
              />
            </ElementContainer>
          )}
          <ElementContainer>
            <ButtonContainer>
              <Buttons
                type='submit'
                appearance='primary'
                isLoading={auth.loginLoading}
              >
                Sign in
              </Buttons>
            </ButtonContainer>
          </ElementContainer>

          <ElementContainer>
            <Typography textAlign='center' variant='h6'>
              don't have an account ? <Link to='/signup'>signup</Link>
            </Typography>
          </ElementContainer>
        </form>
      </StyledBox>

      {/* footer section to-do */}
    </StyledSignUpContainer>
  );
};
