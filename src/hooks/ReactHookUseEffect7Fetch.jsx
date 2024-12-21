import React, { useState, useEffect } from "react";
import axios from "axios";

function ReactHookUseEffect7Fetch() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]); // Include `id` in the dependency array

  return (
    <div>
      <h1>Using useEffect hook to fetch data from API</h1>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <br />
      <p>{post.title}</p>
    </div>
  );
}

export default ReactHookUseEffect7Fetch;
