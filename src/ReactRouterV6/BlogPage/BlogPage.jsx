import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const quire = searchParams.get("posts") || "";
  console.log(quire);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    setSearchParams({ posts: query });
  };

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
      <form onSubmit={handleSubmit}>
        <input type="search" name="search" autoComplete="off" />
        <button>Submit</button>
      </form>
      <div>
        <ul>
          {posts
            .filter((post) => post.title.includes(quire))
            .map((post) => (
              <li key={post.id}>
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default BlogPage;
