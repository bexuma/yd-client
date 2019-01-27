import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Spinner from "../Spinner";
import Post from "./Post";

const POST_QUERY = gql`
  query Post($postSlug: String!) {
    post(postSlug: $postSlug) {
      id
      slug
      status
      language
      title
      body
      imageUrl
      created_at
    }
  }
`;

export class PostContainer extends Component {
  render() {
    const { postSlug } = this.props.match.params;
    return (
      <Query query={POST_QUERY} variables={{ postSlug }}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return <p>Error :(</p>;

          return !data.post ? (
            <p>Post cannot load</p>
          ) : (
            <Post post={data.post} />
          );
        }}
      </Query>
    );
  }
}

export default PostContainer;
