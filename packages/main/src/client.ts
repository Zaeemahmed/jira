import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

//https://jirabackend.vercel.app/api/graphql

const httpLink = new HttpLink({
  uri: "https://jirabackend.vercel.app/api/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem("token");

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache(),
});
