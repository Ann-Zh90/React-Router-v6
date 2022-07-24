import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const postsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await postsResponse.json();
      setPosts(posts);
    }
    fetchData();
  }, []);
  return (
    <>
      <Link to={"/blog/new"}>Create new post</Link>
      <div>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default BlogPage;
