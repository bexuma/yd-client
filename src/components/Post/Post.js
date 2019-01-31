import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import rmMarkdown from "remove-markdown";
import Disqus from "disqus-react";

import CodeBlock from "./CodeBlock";
import "./stylePost.scss";
import { imageNotFound, siteTitle } from "../constants";

export class Post extends Component {
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
    const { id, slug, title, body, imageUrl } = this.props.post;

    const content = rmMarkdown(body);

    const disqusShortname = "youngdevelops";
    const disqusConfig = {
      url: window.location.href,
      identifier: id,
      title: title
    };

    return (
      <div className="container" style={{ maxWidth: "1088px" }}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={content} />
          <meta property="og:type" content="blog post" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={content} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:site_name" content={siteTitle} />

          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={content} />
          <meta name="twitter:image" content={imageUrl} />
          <meta name="twitter:site" content="@youngdevelops" />
          <meta name="twitter:creator" content="@youngdevelops" />
        </Helmet>

        <div className="postContainer" style={{ whiteSpace: "pre-line" }}>
          <h1 style={{ marginBottom: 10 }}>{title}</h1>

          <img
            className="post-image"
            alt={title}
            style={{ width: "100%"}}
            src={imageUrl ? imageUrl : imageNotFound}
          />

          <ReactMarkdown
            escapeHtml={false}
            source={body}
            renderers={{ code: CodeBlock, paragraph: this.renderParagraph }}
            className="postBody"
          />

          <p style={{ paddingBottom: 4 }} className="author">
            Post has been written by{" "}
            <span style={{ fontWeight: 500 }}>Bexultan Myrzatayev</span>
          </p>
        </div>
        {!process.env.NODE_ENV || process.env.NODE_ENV === "development" ? (
          <div className="col-md-2">
            <Link to={`/posts/${slug}/edit`}>Edit</Link>
          </div>
        ) : null}

        <div className="article">
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>

        <div className="footer">
          <p style={{ padding: "30px 0px 40px 0px", fontSize: "18px" }} className="text-center">
            Thanks for visiting{" "}
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "bold"
              }}
            >
              Young Developer
            </Link>{" "}
            🥀
          </p>
        </div>
      </div>
    );
  }
}

export default Post;
