import React from "react";
import { useAuth } from "../../context/AuthContextRoute";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { setUser, user } = useAuth();
  const navigate = useNavigate();

  const logoutHandle = () => {
    setUser(false);
    navigate("/");
  };
  return (
    <div>
        <Helmet>
        <title>React Tutorial | Router-Profile </title>
      </Helmet>
      Profile Page <br />
      {!user && (
        <Link to="/auth/login" className="btn btn-outline-success">
          Login
        </Link>
      )}
      {user && (
        <button className="btn btn-outline-danger" onClick={logoutHandle}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Profile;
