import React, { Component } from 'react'

import { Query } from "react-apollo";
import gql from "graphql-tag";
import ReactMarkdown from "react-markdown";
import {Link} from 'react-router-dom';

const POSTS_QUERY = gql`
  {
    posts {
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


export class PostList extends Component {
  render() {
    return (
      <Query query={POSTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.posts.map(({ id, postTranslations }) => (
            <div key={id}>
              <ul>
                {postTranslations.map(({title, body}) => {
                  return (
                    <li key={id}>
                      <Link to={`/posts/${id}`}>{title}</Link>
                      <div style={{ whiteSpace: "pre-line" }}>
                        <ReactMarkdown source={body} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ));
        }}
      </Query>
    )
  }
}

export default PostList
