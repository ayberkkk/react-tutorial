import React from "react";
import { useAuth } from "../../../context/AuthContextRoute";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>React Tutorial | Router-Login </title>
      </Helmet>
      Login Page <br />
      <button className="btn btn-outline-success" onClick={loginHandle}>
        Login
      </button>
    </div>
  );
};

export default Login;
