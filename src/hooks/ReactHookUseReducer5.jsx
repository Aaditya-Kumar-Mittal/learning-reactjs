import React, { useState, useEffect } from "react";
import axios from "axios";

function ReactHookUseReducer5() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setError("");
        setPost(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        setPost({}); // Set the post to an empty object if there's an console.error);
      });
  }, []); // API is called only once

  return (
    <div>
      <h1>Data Fetching using useReducer Hook</h1>
      <h1>{loading ? "Loading..." : post.title}</h1>
      <h3>{error ? error : null}</h3>
    </div>
  );
}

export default ReactHookUseReducer5;
