import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from "@apollo/client";
import useAuthStore from "../zustand/auth-store";

const httpLink = new HttpLink({
  uri: __DEV__
    ? "http://localhost:9000/graphql"
    : "http://localhost:9000/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const authToken = useAuthStore.getState().authToken;

  operation.setContext(({ headers = {} }) => {
    const finalHeaders = {
      ...headers,
      authorization: authToken ? `Bearer ${authToken}` : "",
    };

    return { headers: finalHeaders };
  });

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache({}),
  link: concat(authMiddleware, httpLink),
  defaultOptions: {
    query: {
      fetchPolicy: "network-only",
    },
  },
});

export default client;
