import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogLayout = () => {
  return (
    <div>
      <Helmet>
        <title>React Tutorial | Router-Home </title>
      </Helmet>
      Blog Layout
      <Outlet />
    </div>
  );
};

export default BlogLayout;
