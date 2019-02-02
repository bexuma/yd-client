import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import rmMarkdown from "remove-markdown";
import Disqus from "disqus-react";
import {
  VKShareButton,
  VKIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  GooglePlusShareButton,
  GooglePlusIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";

import CodeBlock from "./CodeBlock";
import { imageNotFound } from "../constants";
import "./stylePost.scss";

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
    const { id, title, body, imageUrl } = this.props.post;

    const content = rmMarkdown(body).substring(0, 138);
    const url = window.location.href;

    const disqusShortname = "youngdevelops";
    const disqusConfig = {
      url: url,
      identifier: id,
      title: title
    };

    return (
      <div className="container" style={{ maxWidth: "1088px" }}>
        <Helmet>
          <title>{title}</title>
          <link rel="canonical" href={url} />
          <meta name="title" content={title} />
          <meta name="referrer" content="always" />
          <meta name="description" content={content} />
          <meta property="og:title" content={title} />
          <meta property="twitter:title" content={title} />
          <meta property="og:url" content={url} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:description" content={content} />
          <meta name="twitter:description" content={content} />
          <meta name="twitter:image:src" content={imageUrl} />
          <meta property="author" content="Bexultan Myrzatayev" />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="article:author" content="Bexultan Myrzatayev" />
          <meta name="robots" content="index, follow" />
          <meta name="twitter:creator" content="@youngdevelops" />
          <meta name="twitter:site" content="@youngdevelops" />
          <meta property="og:site_name" content="Young Developer" />
        </Helmet>

        <div className="post-container" style={{ whiteSpace: "pre-line" }}>
          <h1 style={{ marginBottom: 10 }}>{title}</h1>

          <img
            className="post-image"
            alt={title}
            style={{ width: "100%" }}
            src={imageUrl ? imageUrl : imageNotFound}
          />

          <ReactMarkdown
            escapeHtml={false}
            source={body}
            renderers={{ code: CodeBlock, paragraph: this.renderParagraph }}
            className="post-body"
          />

          {/* <p style={{ paddingBottom: 4 }} className="author">
            Post has been written by{" "}
            <span style={{ fontWeight: 500 }}>Bexultan Myrzatayev</span>
          </p> */}
        </div>
        {/* {!process.env.NODE_ENV || process.env.NODE_ENV === "development" ? (
          <div className="col-md-2">
            <Link to={`/posts/${slug}/edit`}>Edit</Link>
          </div>
        ) : null} */}

        <div className="share-container">
          <h5>Share on Social Media</h5>

          <FacebookShareButton
            children={<FacebookIcon size={72} round={false} />}
            url={url}
            hashtag="#React"
          />

          <VKShareButton
            children={<VKIcon size={72} round={false} />}
            title={title}
            description={content}
            image={imageUrl}
            url={url}
          />

          <LinkedinShareButton
            children={<LinkedinIcon size={72} round={false} />}
            url={url}
            title={title}
            description={content}
          />

          <TwitterShareButton
            children={<TwitterIcon size={72} round={false} />}
            url={url}
            title={title}
            via="youngdevelops"
            hashtags={["React", "Markdown"]}
          />

          <TelegramShareButton
            children={<TelegramIcon size={72} round={false} />}
            url={url}
            title={title}
          />

          <WhatsappShareButton
            children={<WhatsappIcon size={72} round={false} />}
            url={url}
            title={title}
            separator=":
          "
          />

          <GooglePlusShareButton
            children={<GooglePlusIcon size={72} round={false} />}
            url={url}
          />

          <EmailShareButton
            children={<EmailIcon size={72} round={false} />}
            url={url}
            subject={title}
            body={url}
          />
        </div>

        <div className="comment-container">
          <h5>Engage</h5>

          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>

        <div className="footer">
          <p
            style={{ padding: "30px 0px 40px 0px", fontSize: "18px" }}
            className="text-center"
          >
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
