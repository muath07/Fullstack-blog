import axios from "axios";
import React, { useEffect, useState } from "react";

export default function List() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then(res => {
        setPosts(res.data);

   //  .catch((error) => { 

      })
  }, []);

  return (
    <ul>
      <li>Latest Blog Posts</li>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.cover}</p>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
}