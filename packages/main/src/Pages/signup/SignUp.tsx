import React, { useEffect, useState } from "react";
import { Logo, HookFormTextedField, Buttons } from "ui/components";
import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import {
  ButtonContainer,
  ElementContainer,
  StyledBox,
  StyledHeader,
  StyledSignUpContainer,
} from "./styles";

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

const SignUpScreen2 = ({ onClick }) => {
  return <button onClick={onClick}>click me</button>;
};

const SignUpScreen3 = ({ control }) => {
  return (
    <>
      <Box sx={{ width: "500px" }}>
        <HookFormTextedField
          labelText="Text"
          control={control}
          name="email"
          placeholder="Enter email"
          disabled
        />
      </Box>
      <Box sx={{ width: "500px" }}>
        <HookFormTextedField
          labelText="Text"
          control={control}
          name="name"
          placeholder="Enter Full name"
        />
      </Box>
      <Box sx={{ width: "500px" }}>
        <HookFormTextedField
          labelText="Text"
          control={control}
          name="password"
          placeholder="Password"
          type="password"
        />
      </Box>
    </>
  );
};

export const SignUp = () => {
  const { control, handleSubmit, watch } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!watch("email")) {
      navigate("/signup/");
    }
  }, []);

  const onSubmit = (data) => {
    if (location.pathname === "/signup/") {
      navigate("/signup/1");
    } else if (location.pathname === "/signup/1") {
      navigate("/signup/2");
    } else {
      console.log(data);
    }
  };

  return (
    <StyledSignUpContainer>
      <StyledHeader>
        <Logo size="large" />
      </StyledHeader>

      <StyledBox>
        <Typography textAlign="center" variant="h6">
          sign up for your account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Routes>
            <Route path={"/"} element={<SignUpScreen1 control={control} />} />
            <Route path={"/1"} element={<SignUpScreen2 onClick={() => {}} />} />
            <Route path={"/2"} element={<SignUpScreen3 control={control} />} />
          </Routes>
          {location.pathname !== "/signup/1" && (
            <ElementContainer>
              <Typography variant="body2" mt="20px">
                By signing up, I accept the Atlassion Cloud Terms of service and
                acknowledge the privacy policy
              </Typography>
              <ButtonContainer>
                <Buttons type="submit" appearance="primary">
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
