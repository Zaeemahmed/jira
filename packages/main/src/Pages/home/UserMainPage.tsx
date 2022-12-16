import React from "react";
import { Layout } from "../../components/Layout";
import { Products } from "./Products";
import { Projects } from "./Projects";

export function UserMainPage() {
  return (
    <Layout>
      <Projects />
      <Products />
    </Layout>
  );
}
