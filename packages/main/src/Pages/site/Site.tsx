import React, { useContext } from "react";
import { styled, Paper, PaperProps, Typography } from "@mui/material";
import { LogoJira, HookFormTextedField, Buttons, Logo } from "ui/components";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import { AuthContext } from "../../context/Auth";
import { Layout } from "../../components/Layout";

const StyledSite = styled("div")(() => ({
  height: "100vh",
  fontFamily: "'Source Sans Pro', sans-serif",
  "& header": {
    paddingTop: "20px",
    textAlign: "center",
    background: "linear-gradient(to left, #0575e6, #021b79)",
    height: "600px",
    clipPath:
      "polygon(100% 0%, 0% 0% , 0.00% 48.39%, 2.00% 47.50%, 4.00% 46.64%, 6.00% 45.82%, 8.00% 45.07%, 10.00% 44.39%, 12.00% 43.79%, 14.00% 43.29%, 16.00% 42.89%, 18.00% 42.59%, 20.00% 42.40%, 22.00% 42.33%, 24.00% 42.38%, 26.00% 42.54%, 28.00% 42.81%, 30.00% 43.19%, 32.00% 43.67%, 34.00% 44.25%, 36.00% 44.91%, 38.00% 45.65%, 40.00% 46.45%, 42.00% 47.30%, 44.00% 48.19%, 46.00% 49.10%, 48.00% 50.02%, 50.00% 50.94%, 52.00% 51.84%, 54.00% 52.70%, 56.00% 53.51%, 58.00% 54.26%, 60.00% 54.94%, 62.00% 55.54%, 64.00% 56.04%, 66.00% 56.45%, 68.00% 56.74%, 70.00% 56.93%, 72.00% 57.00%, 74.00% 56.95%, 76.00% 56.79%, 78.00% 56.52%, 80.00% 56.14%, 82.00% 55.66%, 84.00% 55.08%, 86.00% 54.42%, 88.00% 53.68%, 90.00% 52.88%, 92.00% 52.03%, 94.00% 51.14%, 96.00% 50.23%, 98.00% 49.31%, 100.00% 48.39%);",
    "& p": {
      margin: "0",
      fontSize: "18px",
      color: "#ffff",
    },
  },
}));

const StyledFormContainer = styled(Paper)(({}) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  margin: "0 auto",
  maxWidth: "400px",
  transform: " translateY(-400px)",
  padding: "25px 30px",
  "& p:first-of-type": {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "500",
    lineHeight: "40px",
    wordBreak: "break-all",
  },
  "& p:last-of-type": {
    fontWeight: "700",
  },
  "& form p:last-of-type": {
    textAlign: "left",
    fontSize: "12px",
    marginBottom: "24px",
    lineHeight: "16px",
    color: "rgb(108, 121, 143)",
  },
  "& form button": {
    width: "100%",
    height: "40px",
    fontWeight: "700",
  },
}));

const StyledInputContainer = styled(Box)(({}) => ({
  marginBottom: "20px",
}));

export const Site = () => {
  const auth = useContext(AuthContext);
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      email: auth?.user?.email || "",
    },
  });

  const handleOnSubmit = () => {};

  return (
    <Layout>
      <StyledSite>
        <header>
          <LogoJira size="large" />
          <p>Cloud Free</p>
        </header>
        <StyledFormContainer>
          <Typography variant="h5">
            Welcome back, {auth?.user?.fullName}
          </Typography>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <StyledInputContainer>
              <HookFormTextedField
                hasLabel
                labelText="Work email"
                control={control}
                name="email"
                placeholder="Enter email"
                disabled
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <HookFormTextedField
                hasLabel
                labelText="Your site"
                control={control}
                name="site"
                placeholder=""
                type="text"
              />
            </StyledInputContainer>

            <p>
              By clicking below, you agree to the Atlassian Cloud Terms of
              Service and Privacy Policy.
            </p>
            <Buttons type="submit" appearance="primary" disabled>
              Agree
            </Buttons>
          </form>
          <Typography variant="h4">NO CREDIT REQUIRED</Typography>
          <Logo size="small" />
        </StyledFormContainer>
      </StyledSite>
    </Layout>
  );
};
