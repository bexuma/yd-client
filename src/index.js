import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Router from "./Router";
import "./index.css";

const client = new ApolloClient({
  uri: "https://tranquil-mesa-50557.herokuapp.com/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>,
  document.getElementById("root")
);
