import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Form from './Form';
import Spinner from '../Spinner';

const POST_TRANSLATION_QUERY = gql`
  query PostTranslationQuery($id: ID!) {
    postTranslation(id: $id) {
      id
      language
      title
      body
    }
  }
`;

export class PostUpdate extends Component {
  render() {
    const { postTranslationId } = this.props.match.params;
    return (
      <Query
        query={POST_TRANSLATION_QUERY}
        variables={{ id: postTranslationId }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return <p>Error :(</p>;

          return <Form postTranslation={data.postTranslation} />
        }}
      </Query>
    );
  }
}

export default PostUpdate;
