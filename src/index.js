import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://youngdeveloper-backend.herokuapp.com/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
