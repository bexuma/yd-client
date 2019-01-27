import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import PostListItem from "./PostListItem";
import Spinner from "../Spinner";

const PUBLISHED_POSTS_QUERY = gql`
  {
    publishedPosts {
      id
      slug
      status
      language
      title
      body
      created_at
    }
  }
`;

export class PostList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 ml-auto mr-auto">
            <h2 className="title">Latest Blogposts</h2>
            <Query query={PUBLISHED_POSTS_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return <Spinner />;
                if (error) return <p>Error :(</p>;

                return data.publishedPosts.map(
                  ({ id, title, body, slug, created_at }) => (
                    <PostListItem
                      key={id}
                      slug={slug}
                      postId={id}
                      title={title}
                      body={body}
                      created_at={created_at}
                    />
                  )
                );
              }}
            </Query>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
