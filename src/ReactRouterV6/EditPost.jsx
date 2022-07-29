import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>You are trying to edit post {id}</div>
      <button onClick={goBack}>Go back</button>
    </>
  );
};

export default EditPost;
