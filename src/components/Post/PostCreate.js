import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const POST_CREATE_MUTATION = gql`
  mutation PostCreateMutation($language: Language!, $title: String!, $body: String!) {
    postCreate(language: $language, title: $title, body: $body) {
      id
      postedBy {
        email
      }
    }
  }
`;

export class PostCreate extends Component {
  state = {
    language: "en",
    title: "",
    body: ""
  };
  render() {
    const { language, title, body } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="form-group has-default bmd-form-group">
              <input
                className="form-control"
                value={title}
                onChange={e => this.setState({ title: e.target.value })}
                type="text"
                placeholder="Post title"
              />
            </div>

            <div className="form-group label-floating bmd-form-group">
              <textarea
                className="form-control"
                value={body}
                onChange={e => this.setState({ body: e.target.value })}
                rows="25"
                placeholder="You can write your text here..."
              />
            </div>

            <Mutation
              mutation={POST_CREATE_MUTATION}
              variables={{ language, title, body }}
              onCompleted={() => console.log("HAHAHAH")}
            >
              {createPostMutation => (
                <button
                  onClick={createPostMutation}
                  className="btn btn-info btn-lg"
                  disabled={!title || !body}
                >
                  Create Post
                </button>
              )}
            </Mutation>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCreate;
