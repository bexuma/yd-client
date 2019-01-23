import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ReactMarkdown from "react-markdown";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import "./stylePost.scss";
// import materialKit from '../../material-kit';

const POST_QUERY = gql`
  query Post($postSlug: String!) {
    post(postSlug: $postSlug) {
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

export class Post extends Component {
  renderPost = ({ slug, language, title, body }) => {
    const avatarLinkedIn =
      "https://media.licdn.com/dms/image/C5103AQH1gkmiVhd-lw/profile-displayphoto-shrink_200_200/0?e=1553126400&v=beta&t=1MoGtCyEFyDr8bPLpLEyPa30-RNz_Z_8cXtYNccNeO4";
    return (
      <div className="container" style={{ maxWidth: "1088px" }}>
        <div className="row">
          <div className="col-md-8" style={{ whiteSpace: "pre-line" }}>
            <h1 className="title">{title}</h1>

            <ReactMarkdown className="post-body" source={body} />
            {!process.env.NODE_ENV || process.env.NODE_ENV === "development" ? (
              <Link to={`/posts/${slug}/edit`}>Edit</Link>
            ) : null}
            <h4 className="card-title">Bexultan Myrzatayev</h4>
          </div>
        </div>
      </div>
    );
  };

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
            this.renderPost(data.post)
          );
        }}
      </Query>
    );
  }
}

export default Post;
