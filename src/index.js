import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PostCreate from "./components/Post/PostCreate";
import PostUpdate from "./components/Post/PostUpdate";
import Post from "./components/Post/PostContainer";
import Navbar from "./components/Navbar";
import PostList from "./components/Post/PostList";
import DraftPostList from "./components/Post/DraftPostList";
import About from "./components/About";

import "./material-kit.css";

const client = new ApolloClient({
  uri: "https://tranquil-mesa-50557.herokuapp.com/graphql"
});

const postCRUD = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return (
      <div>
        <Route exact path="/drafts" component={DraftPostList} />
        <Route exact path="/new_post" component={PostCreate} />
        <Route exact path="/posts/:postSlug/edit" component={PostUpdate} />
      </div>
    );
  }
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Navbar />

        <Route exact path="/" component={PostList} />
        <Route exact path="/about-bexultan" component={About} />
        <Route exact path="/posts/:postSlug" component={Post} />

        {postCRUD()}
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
