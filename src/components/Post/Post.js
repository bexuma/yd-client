import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ReactMarkdown from "react-markdown";
import Spinner from "../Spinner";
// import materialKit from '../../material-kit';

const POST_QUERY = gql`
  query Post($id: ID!) {
    post(id: $id) {
      id
      status
      language
      title
      body
      created_at
    }
  }
`;

export class Post extends Component {
  renderPost = ({ id, language, title, body }) => {
    const avatarFB =
      "https://scontent.fkgf1-1.fna.fbcdn.net/v/t1.0-1/p320x320/25591775_1798446113788839_8274713958521897995_n.jpg?_nc_cat=102&_nc_ht=scontent.fkgf1-1.fna&oh=d159d419b756cd8ded026395e5cacc9a&oe=5CCA3D1C";
    const avatarLinkedIn =
      "https://media.licdn.com/dms/image/C5103AQH1gkmiVhd-lw/profile-displayphoto-shrink_200_200/0?e=1553126400&v=beta&t=1MoGtCyEFyDr8bPLpLEyPa30-RNz_Z_8cXtYNccNeO4";
    return (
      <div>
        <div
          className="page-header header-filter"
          style={{
            backgroundColor: "#d32f2f",
            transform: 'translate3d("0px", "0px", "0px")',
            dataParallax: true
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <h1 className="title">{title}</h1>
                {/* <h4></h4> */}
                <br />
                <a href="/" className="btn btn-rose btn-round btn-lg">
                  {/* <i className="material-icons">format_align_left</i> */}
                  <i className="fab fa-youtube" />
                  {"  Video Soon"}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="main main-raised">
          <div className="container" style={{ whiteSpace: "pre-line" }}>
            <div className="section section-text">
              <div className="row">
                <ReactMarkdown
                  className="col-md-8 ml-auto mr-auto"
                  source={body}
                />
              </div>
            </div>

            <div className="section section-blog-info">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="blog-tags">
                        <span
                          className="badge badge-danger badge-pill"
                          style={{ marginRight: 5 }}
                        >
                          Ruby
                        </span>
                        <span
                          className="badge badge-danger badge-pill"
                          style={{ marginRight: 5 }}
                        >
                          Ruby on Rails
                        </span>
                      </div>
                    </div>

                    {/* <div className="col-md-6">
                      <a
                        href="http://google.com"
                        className="btn btn-google btn-round float-right"
                      >
                        <i className="fab fa-google" />
                        232
                      </a>
                    </div> */}
                  </div>

                  <hr />
                  <div
                    className="card card-profile card-plain"
                    style={{ marginTop: 0 }}
                  >
                    <div className="row">
                      <div className="col-md-2">
                        <div className="card-avatar">
                          <a href="http://google.com">
                            <img
                              className="img"
                              src={avatarLinkedIn}
                              alt="Bexultan Myrzatayev"
                            />
                          </a>
                        </div>
                      </div>

                      <div className="col-md-8" style={{ textAlign: "left" }}>
                        <h4 className="card-title">Bexultan Myrzatayev</h4>
                        <p className="description">Aspiring teacher</p>
                      </div>

                      {/* <div className="col-md-2">
                        <button
                          type="button"
                          className="btn btn-danger pull-right btn-round"
                        >
                          Follow
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { postId } = this.props.match.params;
    return (
      <Query query={POST_QUERY} variables={{ id: postId }}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return <p>Error :(</p>;

          return this.renderPost(data.post);
        }}
      </Query>
    );
  }
}

export default Post;
