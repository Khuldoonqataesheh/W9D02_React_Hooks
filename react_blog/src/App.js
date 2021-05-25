import React, { useState, useEffect } from "react";
import axios from "axios";

// jsx
const App = () => {
  const [posts, setPosts] = useState([
    { userId: 1, id: 101, title: "gym", body: "playing cardio" },
    {
      userId: 2,
      id: 102,
      title: "playstation",
      body: "beating my friend in fifa",
    },
  ]);
  const [userId, setUserId] = useState(0);
  const [id, setId] = useState(100);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const newPosts = posts.map((elem) => {
    return (
      <>
        {" "}
        <h2>{elem.title}:</h2>
        <p>{elem.body}</p>
      </>
    );
  });
  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  useEffect(() => {
    getData();
  },[]);
  return (
    <div>
      <h1>react_blog </h1>
      {newPosts}

      <input
        type="text"
        placeholder="userId"
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Id"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="body"
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setPosts([...posts, { userId, id, title, body }]);
        }}
      >
        {" "}
        add new post{" "}
      </button>
    </div>
  );
};

export default App;
