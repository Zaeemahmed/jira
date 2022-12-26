import * as React from "react";
import { Layout } from "../../components/Layout";
import { AuthContext } from "../../context/Auth";
import { Project } from "../../utils/__generated__/graphql";
import { ProjectsTable } from "./Table";

export const Projects = () => {
  const auth = React.useContext(AuthContext);
  return (
    <Layout>
      <ProjectsTable projects={auth?.user?.projects as Array<Project> || []} />
    </Layout>
  );
};
