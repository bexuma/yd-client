import React, { Component } from 'react'

export class Post extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.match.params.id}
        </p>
      </div>
    )
  }
}

export default Post
