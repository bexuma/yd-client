import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./material-kit.css";

import App from "./components/App";
import Post from "./components/Post/Post";
import Navbar from "./components/Navbar";

const client = new ApolloClient({
  uri: "https://tranquil-mesa-50557.herokuapp.com/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Navbar />

        <Route exact path="/" component={App} />
        <Route exact path="/posts/:postId" component={Post} />

      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
