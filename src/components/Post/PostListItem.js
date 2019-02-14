import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default props => {
  const { slug, title, status, imageUrl, created_at, tags } = props.post;
  const postedTime = moment(created_at, "YYYY-MM-DD hh:mm:ss").fromNow();
  return (
    <div className="card-blog">
      <div className="row">
        <div className="col-md-4">
          <div className="card-header-image">
            <Link to={`/posts/${slug}`}>
              <img
                alt={title}
                className="img img-raised"
                src={imageUrl ? imageUrl : "img/card-blog4.jpg"}
              />
            </Link>
            <div
              className="colored-shadow"
              style={{
                backgroundColor: "#ffffff",
                opacity: 1
              }}
            />
          </div>
        </div>

        <div className="col-md-8" style={{ whiteSpace: "pre-line" }}>
      
          {tags.map(({id, name}) => {
            return <h6 key={id} className="card-category text-info">{name}</h6>;
          })}

          <h3 className="card-title">
            <Link to={`/posts/${slug}`}>{title}</Link>
          </h3>

          {/* <ReactMarkdown className="card-description" source={body} /> */}

          {/* <Link to={`/posts/${id}`}>Read More</Link> */}

          <p className="author">
            <b>{status + " "}</b> by Bexultan, {postedTime}
          </p>
        </div>
      </div>
    </div>
  );
};
