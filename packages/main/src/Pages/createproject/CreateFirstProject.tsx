import React, { useContext, useEffect } from "react";
import { styled, Paper, PaperProps, Typography } from "@mui/material";
import { LogoJira, HookFormTextedField, Buttons, Logo } from "ui/components";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import { AuthContext } from "../../context/Auth";
import { Layout } from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { ButtonContainer, Container } from "./styles";
import skeleton from "./jiraSkeleton.png";

export const CreateFirstProject = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({});

  const handleOnSubmit = async (data) => {
    try {
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    window.history.pushState(null, "", window.location.pathname);
  }, []);

  return (
    <Layout>
      <Container>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <Typography variant="h5">Create a project</Typography>
          <Typography variant="body2" mt="20px">
            You can change these settings in your project settings
          </Typography>
          <Box mt="20px">
            <HookFormTextedField
              hasLabel
              labelText="Name"
              control={control}
              name="projectName"
              placeholder="Project Name"
            />
          </Box>
          <Box mt="20px">
            <HookFormTextedField
              hasLabel
              labelText="Key"
              control={control}
              name="key"
              placeholder="Key"
            />
          </Box>
          <ButtonContainer>
            <Buttons appearance="primary" type="submit">
              create
            </Buttons>
            <Buttons
              onClick={() => {
                navigate("/");
              }}
            >
              back
            </Buttons>
          </ButtonContainer>
        </form>
        <Box>
          <img src={skeleton} />
        </Box>
      </Container>
    </Layout>
  );
};
