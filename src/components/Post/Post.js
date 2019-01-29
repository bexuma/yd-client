import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import CodeBlock from "./CodeBlock";
import "./stylePost.scss";
import { imageNotFound } from "../constants";

export class Post extends Component {
  componentDidMount() {
    document.title = this.props.post.title;
  }

  renderParagraph(props) {
    // rendering media without p wrapper
    const { children } = props;

    if (
      children &&
      children[0] &&
      children.length === 1 &&
      children[0].props &&
      children[0].props.src
    ) {
      return children;
    }

    return <p>{children}</p>;
  }

  render() {
    const { slug, language, title, body, imageUrl } = this.props.post;

    return (
      <div className="container" style={{ maxWidth: "1088px" }}>
        <div className="row">
          <div
            className="col-md-8 postContainer"
            style={{ whiteSpace: "pre-line" }}
          >
            <h1 style={{ marginBottom: 10 }}>{title}</h1>

            <img
              alt={title}
              style={{ width: "100%" }}
              src={imageUrl ? imageUrl : imageNotFound}
            />

            <ReactMarkdown
              escapeHtml={false}
              source={body}
              renderers={{ code: CodeBlock, paragraph: this.renderParagraph }}
              className="postBody"
            />

            <h4 style={{ paddingBottom: 40 }}>
              Post has been written by{" "}
              <span style={{ fontWeight: 500 }}>Bexultan Myrzatayev</span>
            </h4>
          </div>
          {!process.env.NODE_ENV || process.env.NODE_ENV === "development" ? (
            <div className="col-md-2">
              <Link to={`/posts/${slug}/edit`}>Edit</Link>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Post;
