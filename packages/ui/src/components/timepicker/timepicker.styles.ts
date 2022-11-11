import { styled, Box, Popper, Typography } from "@mui/material";

export const StyledPopper = styled(Popper)(({}) => ({}));

export const Option = styled(Typography)(({}) => ({
  paddingLeft: "10px",
  height: "32px",
  ":hover": {
    backgroundColor: "rgba(25, 118, 210, 0.08)",
  },
  alignSelf: "stretch",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

export const StyledPopperBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "8px 0px",
  width: "304px",
  position: "relative",
  background: "#ffffff",
  boxShadow:
    "0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)",
  borderRadius: "3px",
  marginTop: "10px",
  boxSizing: "border-box",
}));
