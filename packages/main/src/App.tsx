import { ApolloProvider } from "@apollo/client";
import React from "react";
import { apolloClient } from "./client";
import { Users } from "./Users";

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Users />
    </ApolloProvider>
  );
};
export default App;
