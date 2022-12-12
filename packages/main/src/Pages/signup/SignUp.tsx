import React, { useEffect, useRef, useState } from 'react';
import { Logo, HookFormTextedField, Buttons, EmptyState } from 'ui/components';
import emailjs from '@emailjs/browser';
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import {
  ButtonContainer,
  ElementContainer,
  StyledBox,
  StyledHeader,
  StyledSignUpContainer,
} from './styles';

const SignUpScreen1 = ({ control }) => {
  return (
    <ElementContainer>
      <HookFormTextedField
        labelText='Text'
        control={control}
        name='email'
        placeholder='Enter email'
        required
      />
    </ElementContainer>
  );
};

interface SignUpScreen1Props {
  email: string;
}

const SignUpScreen2 = ({ email }: SignUpScreen1Props) => {
  return (
    <div>
      <EmptyState
        imageUrl='./email.svg'
        header='Check your inbox to login'
        description={`To complete setup and login, click the verification link in the email we have sent to:\n\t ${email}`}
      />
    </div>
  );
};

const SignUpScreen3 = ({ control }) => {
  return (
    <>
      <ElementContainer>
        <HookFormTextedField
          labelText='Text'
          control={control}
          name='email'
          placeholder='Enter email'
          disabled
        />
      </ElementContainer>
      <ElementContainer>
        <HookFormTextedField
          labelText='Text'
          control={control}
          name='name'
          placeholder='Enter Full name'
        />
      </ElementContainer>
      <ElementContainer>
        <HookFormTextedField
          labelText='Text'
          control={control}
          name='password'
          placeholder='Password'
          type='password'
        />
      </ElementContainer>
    </>
  );
};

export const SignUp = () => {
  const { control, handleSubmit, watch, setValue } = useForm();
  const [email, setEmail] = useState<string>('');
  const form = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!watch('email') && !localStorage.getItem('email')) {
      navigate('/signup/');
    } else {
      setValue('email', localStorage.getItem('email'));
    }
  }, []);

  // send email
  const sendEmail = () => {
    // e.preventDefault();
    // console.log(form.current);
    emailjs
      .sendForm(
        'service_a6idqxc',
        'template_0q69ltk',
        form.current!,
        '7u4_esbk4V-OGdmnC',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text, 'not send');
        },
      );
  };

  const onSubmit = (data) => {
    if (location.pathname === '/signup/') {
      sendEmail();
      localStorage.setItem('email', data.email);
      setEmail(data.email);
      navigate('/signup/1');
    } else if (location.pathname === '/signup/1') {
      navigate('/signup/2');
    } else {
      console.log(data);
    }
  };

  return (
    <StyledSignUpContainer>
      <StyledHeader>
        <Logo size='large' />
      </StyledHeader>

      <StyledBox>
        <Typography textAlign='center' variant='h6'>
          sign up for your account
        </Typography>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <Routes>
            <Route path={'/'} element={<SignUpScreen1 control={control} />} />
            <Route path={'/1'} element={<SignUpScreen2 email={email} />} />
            <Route path={'/2'} element={<SignUpScreen3 control={control} />} />
          </Routes>
          {location.pathname !== '/signup/1' && (
            <ElementContainer>
              <Typography variant='body2' mt='20px'>
                By signing up, I accept the Atlassian Cloud Terms of service and
                acknowledge the privacy policy
              </Typography>
              <ButtonContainer>
                <Buttons type='submit' appearance='primary'>
                  Sign up
                </Buttons>
              </ButtonContainer>
            </ElementContainer>
          )}
        </form>
      </StyledBox>

      {/* footer section to-do */}
    </StyledSignUpContainer>
  );
};
