import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://youngdeveloper-backend.herokuapp.com/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <h3>Header</h3>

        <Route exact path="/" component={App} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
