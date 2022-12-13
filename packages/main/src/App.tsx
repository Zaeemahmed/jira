import { ApolloProvider } from "@apollo/client";
import React from "react";
import { apolloClient } from "./client";
import { ThemeProvider } from "ui/components";
import { BrowserRouter } from "react-router-dom";

import Main from "./Main";
import { AuthProvider } from "./context/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <ThemeProvider>
            <Main />
          </ThemeProvider>
        </AuthProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
};
export default App;
