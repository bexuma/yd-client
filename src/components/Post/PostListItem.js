import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import moment from "moment";

export default props => {
  const { postId, title, body, created_at } = props;
  const postedTime = moment(created_at, "YYYY-MM-DD hh:mm:ss").fromNow();
  return (
    <div className="card card-plain card-blog">
      <div className="row">
        <div className="col-md-4">
          <div className="card-header card-header-image">
            <Link to={`/posts/${postId}`}>
              <img
                alt={title}
                className="img img-raised"
                src="img/card-blog4.jpg"
              />
            </Link>
            <div
              className="colored-shadow"
              style={{
                backgroundImage: "url(img/card-blog4.jpg)",
                opacity: 1
              }}
            />
          </div>
        </div>

        <div className="col-md-8" style={{ whiteSpace: "pre-line" }}>
          <h6 className="card-category text-info">Ruby on Rails</h6>
          <h3 className="card-title">
            <Link to={`/posts/${postId}`}>{title}</Link>
          </h3>

          {/* <ReactMarkdown className="card-description" source={body} /> */}

          {/* <Link to={`/posts/${id}`}>Read More</Link> */}

          <p className="author">by Bexultan, {postedTime}</p>
        </div>
      </div>
    </div>
  );
};
