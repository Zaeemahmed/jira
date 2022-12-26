import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Buttons } from "ui/components";
import { AuthContext } from "../../context/Auth";
import { Container } from "./Products";

export const CreateSite = () => {
  const navigate = useNavigate();
  return (
    <Buttons onClick={() => navigate("/createSite")} appearance="primary">
      Create site <AddCircleOutlineOutlinedIcon />
    </Buttons>
  );
};

export const Project = () => {
  const navigate = useNavigate();
  return (
    <Buttons onClick={() => navigate(`/createProject`)} appearance="primary">
      Create Project <AddCircleOutlineOutlinedIcon />
    </Buttons>
  );
};

export function Projects() {
  const auth = useContext(AuthContext);

  return (
    <Container>{!auth?.user?.site ? <CreateSite /> : <Project />}</Container>
  );
}
