import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import PostList from "./components/PostList";
import Post from "./components/Post";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://youngdeveloper-backend.herokuapp.com/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <h3>Young Developer</h3>

        <Route exact path="/" component={PostList} />
        <Route path="/posts/:id" component={Post} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
