import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PostListItem from "./PostListItem";
import Spinner from "../Spinner";
import { siteTitle } from "../constants";

import "./postList.scss";

const PUBLISHED_POSTS_QUERY = gql`
  {
    publishedPosts {
      id
      slug
      status
      language
      title
      body
      imageUrl
      created_at
      tags {
        id
        name
      }
    }
  }
`;

export class PostList extends Component {
  render() {
    const description = "Bexultan Myrzatayev's programming blog.";
    const squareLogoUrl =
      "https://s3.ap-northeast-2.amazonaws.com/youngdeveloper/logoSquare.png";

    return (
      <div className="container">
        <Helmet
          title={siteTitle}
          meta={[
            { name: "description", content: description },
            { property: "og:type", content: "homepage" },
            { property: "og:title", content: siteTitle },
            { property: "og:description", content: description },
            { property: "og:image", content: squareLogoUrl },
            { property: "og:url", content: window.location.href },
            { property: "og:site_name", content: siteTitle },
            { name: "twitter:title", content: siteTitle },
            { name: "twitter:description", content: description },
            { name: "twitter:image", content: squareLogoUrl },
            { name: "twitter:site", content: "@youngdevelops" },
            { name: "twitter:creator", content: "@youngdevelops" }
          ]}
        />

        <div className="row">
          <div className="col-md-10 ml-auto mr-auto">
            <Query query={PUBLISHED_POSTS_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return <Spinner />;
                if (error) return <p>Error :(</p>;

                if (
                  !Array.isArray(data.publishedPosts) ||
                  !data.publishedPosts.length
                ) {
                  return (
                    <div>
                      <h2>Bexultan is hardly working on his first blog post</h2>
                      <h4 style={{ fontSize: "1.5rem" }}>Be patient!</h4>
                    </div>
                  );
                }

                return (
                  <div>
                    <h2 className="title">Latest Blogposts</h2>
                    {data.publishedPosts.map(
                      (post) => (
                        <PostListItem
                          key={post.id}
                          post={post}
                        />
                      )
                    )}
                  </div>
                );
              }}
            </Query>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
