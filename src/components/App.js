import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";

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

class App extends Component {
  render() {
    return (
      <Query query={POSTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.posts.map(({ id, postTranslations }) => (
            <div key={id}>
              <ul>
                {postTranslations.map(({ language, title, body }) => {
                  return (
                    <li key={id}>
                      <h4>{title}</h4>
                      <p>{body}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          ));
        }}
      </Query>
    );
  }
}

export default App;
