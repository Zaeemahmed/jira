import { ApolloProvider } from "@apollo/client";
import React from "react";
import { apolloClient } from "./client";
import { ThemeProvider } from "ui/components";
import { SignUp } from "./Pages/SignUp";

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <SignUp />
      </ThemeProvider>
    </ApolloProvider>
  );
};
export default App;
