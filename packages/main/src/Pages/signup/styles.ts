import { Box, styled } from "@mui/material";

export const StyledHeader = styled("header")(({}) => ({
  marginBottom: "25px",
}));

export const StyledSignUpContainer = styled("div")(({}) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "Roboto",
  justifyContent: "center",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  boxShadow:
    "5px 5px 3px rgba(128,128,128, 0.1), -3px -3px 2px rgba(128,128,128, 0.1)",
  padding: "15px",
  boxSizing: "border-box",
  width: "500px",
  fontFamily: "Roboto",
}));

export const ElementContainer = styled(Box)(({ theme }) => ({
  width: "80%",
  margin: "10px auto",
  "& a": {
    textDecoration: "none",
  },
}));

export const ButtonContainer = styled("header")(({}) => ({
  display: "flex",
  marginTop: "20px",
  justifyContent: "center",
  "& button": {
    width: "100%",
    padding: "10px !important",
  },
}));
