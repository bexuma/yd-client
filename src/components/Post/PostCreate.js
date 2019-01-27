import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const POST_CREATE_MUTATION = gql`
  mutation PostCreateMutation(
    $language: Language!
    $title: String!
    $body: String!
    $imageUrl: String!
  ) {
    postCreate(language: $language, title: $title, body: $body, imageUrl: $imageUrl) {
      slug
    }
  }
`;

export class PostCreate extends Component {
  state = {
      isPublished: false,
      status: "draft",
      language: "en",
      title: "",
      body: "",
      imageUrl: ""
    };


  handleStatusChange = () => {
    const { isPublished } = this.state;

    this.setState({
      isPublished: !isPublished,
      status: isPublished ? "draft" : "published"
    });
  }

  render() {
    const { isPublished, status, language, title, body, imageUrl } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
          <div className="form-group has-default bmd-form-group">
              <input
                className="form-control"
                value={imageUrl}
                onChange={e => this.setState({ imageUrl: e.target.value })}
                type="text"
                placeholder="Post image url"
              />
            </div>

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
                rows="22"
                placeholder="You can write your text here..."
              />
            </div>

            <div className="togglebutton" style={{marginBottom: 12}}>
              <label>
                <input
                  name="status"
                  type="checkbox"
                  checked={isPublished}
                  onChange={this.handleStatusChange}
                />
                <span className="toggle" />
                {status}
              </label>
            </div>

            <Mutation
              mutation={POST_CREATE_MUTATION}
              variables={{ status, language, title, body, imageUrl }}
              onCompleted={({ postCreate }) => this.props.history.push(`/posts/${postCreate.slug}`)}
            >
              {createPostMutation => (
                <button
                  onClick={createPostMutation}
                  className="btn btn-info btn-lg"
                  disabled={!title || !body || !imageUrl}
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
