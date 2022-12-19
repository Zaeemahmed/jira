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

export const Project = ({
  numberOfProjects,
  site,
}: {
  numberOfProjects?: Number;
  site?: String;
}) => {
  const navigate = useNavigate();
  return (
    <Buttons
      onClick={() =>
        numberOfProjects === 0 || !numberOfProjects
          ? navigate("/createFirstProject")
          : navigate(`/${site}`)
      }
      appearance="primary"
    >
      Create Project <AddCircleOutlineOutlinedIcon />
    </Buttons>
  );
};

export function Projects() {
  const auth = useContext(AuthContext);

  let userProject = auth?.user?.projects || [];

  return (
    <Container>
      {!auth?.user?.site ? (
        <CreateSite />
      ) : (
        <Project
          numberOfProjects={auth?.user?.projects?.length}
          site={auth?.user?.site}
        />
      )}
    </Container>
  );
}
