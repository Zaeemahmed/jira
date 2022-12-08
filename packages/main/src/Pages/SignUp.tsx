import React, { useState } from "react";
import { Logo, HookFormTextedField } from "ui/components";
import { styled, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { Route, Routes } from "react-router-dom";

const StyledSignUpContainer = styled("div")(({}) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const SignUpScreen1 = ({ control }) => {
  return (
    <Box sx={{ width: "500px" }}>
      <HookFormTextedField
        labelText="Text"
        control={control}
        name="email"
        placeholder="Enter email"
      />
    </Box>
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
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);
  const [isEmailEntered, setIsEmailEntered] = useState<boolean>(false);
  const [step, setStep] = useState(0);
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (!isEmailEntered) {
      setIsEmailEntered(true);
    } else {
      console.log(data);
    }
  };

  return (
    <StyledSignUpContainer>
      <header>
        <Logo size="large" />
      </header>
      <Box component="div">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Routes>
            <Route path={`/`} element={<SignUpScreen1 control={control} />} />
          </Routes>
        </form>
      </Box>

      {/* footer section to-do */}
    </StyledSignUpContainer>
  );
};
