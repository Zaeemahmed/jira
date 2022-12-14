import React, { useContext, useEffect, useRef, useState } from "react";
import { Logo, HookFormTextedField, Buttons, EmptyState } from "ui/components";
import emailjs from "@emailjs/browser";
import { Box, Divider, Typography } from "@mui/material";
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
} from "./styles";
import {
  SignUpMutationVariables,
  useGetUserLazyQuery,
} from "../../utils/__generated__/graphql";
import { AuthContext } from "../../context/Auth";
import EmailSvg from "./email.svg";

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
        renderImage={<EmailSvg />}
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

export const SignUp = () => {
  const { control, handleSubmit, watch, setValue } =
    useForm<SignUpMutationVariables>();
  const [fetchUser] = useGetUserLazyQuery();
  const [email, setEmail] = useState<string>("");
  const form = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (!watch("email") && !localStorage.getItem("email")) {
      navigate("/signup/");
    } else {
      setValue("email", localStorage.getItem("email") as string);
    }
  }, []);

  // send email
  const sendEmail = () => {
    // e.preventDefault();
    // console.log(form.current);
    emailjs
      .sendForm(
        "service_a6idqxc",
        "template_0q69ltk",
        form.current!,
        "7u4_esbk4V-OGdmnC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text, "not send");
        }
      );
  };

  const onSubmit = async (data: SignUpMutationVariables) => {
    if (location.pathname === "/signup/") {
      const user = await fetchUser({ variables: { email: data.email } });
      if (user) {
        return;
      }
      sendEmail();
      localStorage.setItem("email", data.email);
      setEmail(data.email);
      navigate("/signup/1");
    } else if (location.pathname === "/signup/1") {
      navigate("/signup/2");
    } else {
      auth?.onSignup(data);
      localStorage.removeItem("email");
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
          sign up for your account
        </Typography>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <Routes>
            <Route path={"/"} element={<SignUpScreen1 control={control} />} />
            <Route path={"/1"} element={<SignUpScreen2 email={email} />} />
            <Route path={"/2"} element={<SignUpScreen3 control={control} />} />
          </Routes>
          {location.pathname !== "/signup/1" && (
            <>
              <ElementContainer>
                <Typography variant="body2" mt="20px">
                  By signing up, I accept the Atlassian Cloud Terms of service
                  and acknowledge the privacy policy
                </Typography>
                <ButtonContainer>
                  <Buttons
                    type="submit"
                    appearance="primary"
                    isLoading={auth?.signUpLoading}
                  >
                    <Typography
                      variant="body2"
                      fontWeight="500"
                      fontSize="16px"
                    >
                      Sign up
                    </Typography>
                  </Buttons>
                </ButtonContainer>
              </ElementContainer>
              <ElementContainer>
                <Box mt="20px">
                  <Divider />
                </Box>
              </ElementContainer>
              <ElementContainer>
                <Typography textAlign="center" variant="body2">
                  OR
                </Typography>
                <Typography textAlign="center" variant="body2">
                  Already have an account ? <Link to="/login">login</Link>
                </Typography>
              </ElementContainer>
            </>
          )}
        </form>
      </StyledBox>

      {/* footer section to-do */}
    </StyledSignUpContainer>
  );
};
