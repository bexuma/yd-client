import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import Post from './Post';

const POSTS_QUERY = gql`
  {
    posts {
      id
      postTranslations {
        id
        language
        title
        body
      }
    }
  }
`;

export class PostList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <h2 className="title">Latest Blogposts</h2>
            <Query query={POSTS_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return data.posts.map(({ id, postTranslations }) =>
                  postTranslations.map(({ title, body }) => {
                    return <Post key={id} postId={id} title={title} body={body} /> 
                  })
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
