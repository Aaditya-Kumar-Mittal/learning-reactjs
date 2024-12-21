import React, { useState, useEffect } from "react";
import axios from "axios";

function ReactHookUseEffect6Fetch() {
  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        

        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <h1>Using useEffect hook to fetch data from API</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} style={{ textAlign: "left" }}>
              {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ReactHookUseEffect6Fetch;
