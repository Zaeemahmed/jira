import { ApolloProvider } from "@apollo/client";
import React from "react";
import { apolloClient } from "./client";
import { ThemeProvider } from "ui/components";
import { BrowserRouter } from "react-router-dom";

import { SignUp } from "./Pages/SignUp";
import Main from "./Main";

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
};
export default App;
