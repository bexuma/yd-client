import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import PostListItem from "./PostListItem";
import Spinner from "../Spinner";

const DRAFT_POSTS_QUERY = gql`
  {
    draftPosts {
      id
      slug
      status
      language
      title
      body
      imageUrl
      created_at
      tags {
        name
      }
    }
  }
`;

export class DraftPostList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 ml-auto mr-auto">
            <h2 className="title">Latest Blogposts</h2>
            <Query query={DRAFT_POSTS_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return <Spinner />;
                if (error) return <p>Error :(</p>;

                return data.draftPosts.map(post => (
                  <PostListItem key={post.id} post={post} />
                ));
              }}
            </Query>
          </div>
        </div>
      </div>
    );
  }
}

export default DraftPostList;
