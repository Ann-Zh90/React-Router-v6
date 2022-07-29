import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Post = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); // используется для движения по истории или перенаправления пользователя на другую страницу по итогу выполнения каких-то действий

  const goBack = () => {
    navigate(-1); // на 1 страницу назад
  };
  //для перенаправления: navigate('path', {replace, state: 123}), где replace: true значит не записывать перенаправление в историю, а state  - данные, которые можно будет считать там, куда отправить редирект
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => {
        setPost(post);
      });
  }, [id]);
  console.log(post);
  return (
    post && (
      <>
        <button onClick={goBack}>Go back</button>
        <h1>{post.title}</h1>
        <div>{post.body}</div>
        <Link to={`/blog/${id}/edit`}>Edit this post </Link>
      </>
    )
  );
};

export default Post;
