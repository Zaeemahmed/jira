import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { TextInputField } from "ui/components";
import { Layout } from "../../components/Layout";
import { AuthContext } from "../../context/Auth";
import { Project } from "../../utils/__generated__/graphql";
import { ProjectsTable } from "./Table";

export const Projects = () => {
  const auth = React.useContext(AuthContext);
  const [search, setSearch] = React.useState("");
  return (
    <Layout>
      <Box ml="40px" mt="50px">
        <Typography variant="h5">Projects</Typography>
        <Box width={300}>
          <TextInputField
            multiline={false}
            hasIcon={true}
            inputIconType="search"
            placeholder="Search"
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
          />
        </Box>
        <Box mt="30px">
          <ProjectsTable
            projects={(auth?.user?.projects as Array<Project>) || []}
          />
        </Box>
      </Box>
    </Layout>
  );
};
