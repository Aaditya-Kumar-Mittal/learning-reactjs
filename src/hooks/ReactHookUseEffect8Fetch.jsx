import React, { useState, useEffect } from "react";
import axios from "axios";
function ReactHookUseEffect8Fetch() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]); // Include `id` in the dependency array

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <h1>Using useEffect hook to fetch data from API</h1>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <br />
      <br />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <br />
      <p>{post.title}</p>
    </div>
  );
}

export default ReactHookUseEffect8Fetch;
