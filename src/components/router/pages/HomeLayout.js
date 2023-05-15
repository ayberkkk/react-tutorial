import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/blog">Blog Page</NavLink>
        <NavLink to="/contact">Contact Page</NavLink>
        <NavLink to="/profile">Profile Page</NavLink>
        <Link>Test Page</Link>
      </nav>
      <Outlet/>
    </div>
  );
};

export default HomeLayout;
