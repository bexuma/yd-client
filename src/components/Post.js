import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ReactMarkdown from "react-markdown";

const POST_QUERY = gql`
  query Post($id: ID!) {
    post(id: $id) {
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

export class Post extends Component {
  renderPost = ({ id, language, title, body }) => {
    return (
      <div style={{ whiteSpace: "pre-line" }}>
        <h3>{title}</h3>
        <ReactMarkdown source={body} />
      </div>
    );
  };

  render() {
    const { id } = this.props.match.params;
    return (
      <Query query={POST_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          const post = data.post.postTranslations.find(
            ({ language }) => language === "en"
          );

          return this.renderPost(post);
        }}
      </Query>
    );
  }
}

export default Post;
