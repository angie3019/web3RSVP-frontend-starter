import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/angie3019/wbweb3",
  cache: new InMemoryCache(),
});

export default client;