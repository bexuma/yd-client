import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import PostListItem from "./PostListItem";
import Spinner from '../Spinner';

const POSTS_QUERY = gql`
  {
    posts {
      postTranslations {
        id
        language
        title
        body
        created_at
      }
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
            <Query query={POSTS_QUERY}>
              {({ loading, error, data }) => {
                if (loading)
                  return <Spinner />
                if (error) return <p>Error :(</p>;

                return data.posts.map(({ postTranslations }) =>
                  postTranslations.map(({ id, title, body, created_at }) => {
                    return (
                      <PostListItem
                        key={id}
                        postId={id}
                        title={title}
                        body={body}
                        created_at={created_at}
                      />
                    );
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
