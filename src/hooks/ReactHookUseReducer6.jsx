import React, { useReducer, useState, useEffect } from "react";
import axios from "axios";

const initialState = {
  posts: [],
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

function ReactHookUseReducer6() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      });
  }, []);

  return (
    <div>
      <h1>Data Fetching using useReducer Hook</h1>
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        state.posts.map((post) => <p key={post.id}>{post.title}</p>)
      )}
      {state.error && <p>{state.error}</p>}
    </div>
  );
}

export default ReactHookUseReducer6;
