import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const POST_UPDATE_MUTATION = gql`
  mutation PostUpdateMutation(
    $postTranslationId: ID!
    $language: Language!
    $title: String!
    $body: String!
  ) {
    postUpdate(
      postTranslationId: $postTranslationId
      language: $language
      title: $title
      body: $body
    ) {
      id
    }
  }
`;

export class Form extends Component {
  constructor(props) {
    super(props);
    const { id, title, body, language } = props.postTranslation;
    this.state = {
      id,
      title,
      body,
      language
    };
  }

  render() {
    const { title, body, language } = this.state;
    const postTranslationId = this.state.id;
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
              mutation={POST_UPDATE_MUTATION}
              variables={{ postTranslationId, language, title, body }}
              onCompleted={() => console.log("HAHAHAH")}
            >
              {postUpdateMutation => (
                <button
                  onClick={postUpdateMutation}
                  className="btn btn-info btn-lg"
                  disabled={!title || !body}
                >
                  Update Post
                </button>
              )}
            </Mutation>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
