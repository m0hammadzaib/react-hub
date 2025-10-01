import React from "react";
import { useEffect, useState } from "react";
import "./Comp.css";

function getPosts() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setposts(data));
  }, []);

  return (
    <div className="post-card">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p> {post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default getPosts;
