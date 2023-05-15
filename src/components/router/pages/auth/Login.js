import React from "react";
import { useAuth } from "../../../context/AuthContextRoute";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { setUser } = useAuth();

  const loginHandle = () => {
    setUser({
      id: 1,
      username: "Ayberk",
    });
    navigate(location?.state?.return_url || "/");
  };
  return (
    <div>
      Login Page <br/>
      <button className="btn btn-outline-success" onClick={loginHandle}>
        Login
      </button>
    </div>
  );
};

export default Login;
