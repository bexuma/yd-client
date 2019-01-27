import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const POST_UPDATE_MUTATION = gql`
  mutation PostUpdateMutation(
    $id: ID!
    $status: Status!
    $language: Language!
    $title: String!
    $body: String!
    $imageUrl: String!
  ) {
    postUpdate(
      id: $id
      status: $status
      language: $language
      title: $title
      body: $body
      imageUrl: $imageUrl
    ) {
      slug
    }
  }
`;

export class Form extends Component {
  constructor(props) {
    super(props);
    const { id, status, language, title, body, imageUrl } = props.post;
    this.state = {
      id,
      status,
      language,
      title,
      body,
      imageUrl,
      isPublished: status === "published" ? true : false
    };
  }

  handleStatusChange = () => {
    const { isPublished } = this.state;

    this.setState({
      isPublished: !isPublished,
      status: isPublished ? "draft" : "published"
    });
  };

  render() {
    const { id, isPublished, status, language, title, body, imageUrl } = this.state;
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
                rows="25"
                placeholder="You can write your text here..."
              />
            </div>

            <div className="togglebutton" style={{ marginBottom: 12 }}>
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
              mutation={POST_UPDATE_MUTATION}
              variables={{ id, status, language, title, body, imageUrl }}
              onCompleted={({ postUpdate }) => this.props.push(`/posts/${postUpdate.slug}`)}
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
