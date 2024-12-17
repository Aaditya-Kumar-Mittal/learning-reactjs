import React, { Component } from "react";
import axios from "axios";
import "../stylesheets/ReactHTTPPostList1.css"; // Import the CSS file

class ReactHTTPPostList1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMessage: "", // To store the error message, if any
    };
  }

  componentDidMount() {
    // Axios is a promise-based library
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        this.setState({ errorMessage: "Error retrieving data" });
      });
  }

  render() {
    const { posts, errorMessage } = this.state;
    return (
      <div className="container">
        <h1 className="header">List of Posts</h1>
        <div className="post-list">
          {posts.length ? (
            posts.map((post) => (
              <div className="post-card" key={post.id}>
                {post.title}
              </div>
            ))
          ) : (
            <p className="loading">Loading posts...</p>
          )}

          {/* Step 5: Render the error message */}
          {errorMessage ? <div>{errorMessage}</div> : null}
        </div>
      </div>
    );
  }
}

export default ReactHTTPPostList1;
