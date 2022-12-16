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

export function Projects() {
  const auth = useContext(AuthContext);

  let userProject = auth?.user?.projects || [];

  return <Container>{userProject.length === 0 && <CreateSite />}</Container>;
}
