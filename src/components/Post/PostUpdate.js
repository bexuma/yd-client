import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Form from './Form';
import Spinner from '../Spinner';

const POST_QUERY = gql`
  query Post($postSlug: String!) {
    post(postSlug: $postSlug) {
      id
      status
      language
      title
      body
      slug
    }
  }
`;

export class PostUpdate extends Component {
  render() {
    const { postSlug } = this.props.match.params;
    
    return (
      <Query
        query={POST_QUERY}
        variables={{ postSlug }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return <p>Error :(</p>;

          return <Form post={data.post} push={this.props.history.push} />
        }}
      </Query>
    );
  }
}

export default PostUpdate;
