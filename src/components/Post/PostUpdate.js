import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Form from './Form';
import Spinner from '../Spinner';

const POST_QUERY = gql`
  query Post($id: ID!) {
    post(id: $id) {
      id
      status
      language
      title
      body
    }
  }
`;

export class PostUpdate extends Component {
  render() {
    const { postId } = this.props.match.params;
    return (
      <Query
        query={POST_QUERY}
        variables={{ id: postId }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return <p>Error :(</p>;

          return <Form post={data.post} />
        }}
      </Query>
    );
  }
}

export default PostUpdate;
