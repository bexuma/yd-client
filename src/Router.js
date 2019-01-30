import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PostCreate from "./components/Post/PostCreate";
import PostUpdate from "./components/Post/PostUpdate";
import Post from "./components/Post/PostContainer";
import Navbar from "./components/Navbar";
import PostList from "./components/Post/PostList";
import DraftPostList from "./components/Post/DraftPostList";
import About from "./components/About";

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

export default () => (
  <Router>
    <div>
      <Navbar />

      <Route exact path="/" component={PostList} />
      <Route exact path="/about-bexultan" component={About} />
      <Route exact path="/posts/:postSlug" component={Post} />

      {postCRUD()}
    </div>
  </Router>
);
