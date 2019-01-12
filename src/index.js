import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./components/App";
import Post from "./components/Post/Post";
import CreatePost from "./components/CreatePost";
import './material-kit.css';
import Navbar from './components/Navbar';

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://youngdeveloper-backend.herokuapp.com/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
      <Navbar />

        <Route exact path="/" component={App} />
        <Route exact path="/new_post" component={CreatePost} />
        <Route path="/posts/:id/" component={Post} />
        
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
