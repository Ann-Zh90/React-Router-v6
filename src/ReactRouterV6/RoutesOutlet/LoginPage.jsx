import { useLocation } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location?.state?.from || "/";

  const { signIn } = useAuth();

  const loginHandler = (e) => {
    e.preventDefault();
    const user = e.target.username.value;
    signIn(user, () => {
      navigate(fromPage, { replace: true });
    });
  };

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={loginHandler}>
        <label>
          Name: <input type="text" name="username" />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default LoginPage;
