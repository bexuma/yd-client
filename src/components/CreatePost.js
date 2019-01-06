import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CREATE_POST = gql`
  mutation CreatePost($language: Language!, $title: String!, $body: String!) {
    createPost(language: $language, title: $title, body: $body) {
      id
      postedBy {
        email
      }
    }
  }
`;

export class CreatePost extends Component {
  state = {
    language: "ru",
    title: "",
    body: ""
  };
  render() {
    const { language, title, body } = this.state;
    return (
      <div>
        <input
          className="mb2"
          value={title}
          onChange={e => this.setState({ title: e.target.value })}
          type="text"
          placeholder="A title for the post"
        />
        <input
          className="mb2"
          value={body}
          onChange={e => this.setState({ body: e.target.value })}
          type="text"
          placeholder="The body for the post"
        />

        <Mutation
          mutation={CREATE_POST}
          variables={{ language, title, body }}
          onCompleted={() => console.log("HAHAHAH")}
        >
          {createPostMutation => (
            <button onClick={createPostMutation}>Create Post</button>
          )}
        </Mutation>
      </div>
    );
  }
}

export default CreatePost;
