import { useLocation } from "react-router-dom";
const LoginPage = () => {
  const location = useLocation();
  const fromPage = location?.state?.from || "/";

  return (
    <>
      <h1>Login Page</h1>
      <div>You've come from: {fromPage}</div>
    </>
  );
};

export default LoginPage;
