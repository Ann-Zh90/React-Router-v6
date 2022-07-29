import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const CreatePost = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  return (
    <>
      <div>New post</div>
      <button onClick={() => signOut(() => navigate("/", { replace: true }))}>
        Log out
      </button>
    </>
  );
};

export default CreatePost;
