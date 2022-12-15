import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://jirabackend.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

//https://jirabackend.vercel.app/api/graphql
