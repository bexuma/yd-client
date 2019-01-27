import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ReactMarkdown from "react-markdown";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import "./stylePost.scss";
// import materialKit from '../../material-kit';
import CodeBlock from "./CodeBlock";

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

export class Post extends Component {
  renderParagraph(props) {
    const { children } = props;
  
    if (children && children[0]
      && children.length === 1
      && children[0].props
      && children[0].props.src) { // rendering media without p wrapper
  
      return children;
    }
  
    return <p>{children}</p>;
  }

  renderPost = ({ slug, language, title, body, imageUrl }) => {
    return (
      <div className="container" style={{ maxWidth: "1088px" }}>
        <div className="row">
          <div className="col-md-8 postContainer" style={{ whiteSpace: "pre-line" }}>
            <h1 style={{marginBottom: 10}}>{title}</h1>

            {/* <img
                alt={title}
                style={{width: "100%"}}
                src={imageUrl ? imageUrl : "img/card-blog4.jpg"}
              /> */}

            <ReactMarkdown
              source={body}
              renderers={{ code: CodeBlock, paragraph: this.renderParagraph }}
              className="postBody"
            />

            <h4 className="card-title">Bexultan Myrzatayev</h4>
          </div>
          {!process.env.NODE_ENV || process.env.NODE_ENV === "development" ? (
            <div className="col-md-2">
              <Link to={`/posts/${slug}/edit`}>Edit</Link>
            </div>
          ) : null}
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
