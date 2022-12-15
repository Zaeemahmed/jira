import React, { useContext, useEffect, useRef, useState } from "react";
import { Logo, HookFormTextedField, Buttons, EmptyState } from "ui/components";
import emailjs from "@emailjs/browser";
import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";

import {
  ButtonContainer,
  ElementContainer,
  StyledBox,
  StyledHeader,
  StyledSignUpContainer,
} from "../signup/styles";
import {
  LoginMutationVariables,
  useGetUserLazyQuery,
  useLoginMutation,
} from "../../utils/__generated__/graphql";
import { AuthContext } from "../../context/Auth";

const SignUpScreen1 = ({ control }) => {
  return (
    <ElementContainer>
      <HookFormTextedField
        labelText="Text"
        control={control}
        name="email"
        placeholder="Enter email"
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
        imageUrl="./email.svg"
        header="Check your inbox to login"
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
          labelText="Text"
          control={control}
          name="email"
          placeholder="Enter email"
          disabled
        />
      </ElementContainer>
      <ElementContainer>
        <HookFormTextedField
          labelText="Text"
          control={control}
          name="fullName"
          placeholder="Enter Full name"
        />
      </ElementContainer>
      <ElementContainer>
        <HookFormTextedField
          labelText="Text"
          control={control}
          name="password"
          placeholder="Password"
          type="password"
        />
      </ElementContainer>
    </>
  );
};

export const SignIn = () => {
  const { control, handleSubmit, watch } = useForm<LoginMutationVariables>();
  const [getUser] = useGetUserLazyQuery();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const email = watch("email");

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
    navigate("/");
  }

  return (
    <StyledSignUpContainer>
      <StyledHeader>
        <Logo size="large" />
      </StyledHeader>

      <StyledBox>
        <Typography textAlign="center" variant="h6">
          sign in to your account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ElementContainer>
            <HookFormTextedField
              labelText="Text"
              control={control}
              name="email"
              placeholder="Enter email"
              disabled={isEmailVerified}
            />
          </ElementContainer>
          {isEmailVerified && (
            <ElementContainer>
              <HookFormTextedField
                labelText="Text"
                control={control}
                name="password"
                placeholder="Password"
                type="password"
              />
            </ElementContainer>
          )}

          <ButtonContainer>
            <Buttons type="submit" appearance="primary">
              Sign in
            </Buttons>
          </ButtonContainer>

          <ElementContainer>
            <Typography textAlign="center" variant="h6">
              don't have an account ? <Link to="/signup">signup</Link>
            </Typography>
          </ElementContainer>
        </form>
      </StyledBox>

      {/* footer section to-do */}
    </StyledSignUpContainer>
  );
};
