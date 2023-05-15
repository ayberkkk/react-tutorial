import React from "react";
import { Outlet } from "react-router-dom";

const BlogLayout = () => {
  return (
    <div>
      Blog Layout
      <Outlet />
    </div>
  );
};

export default BlogLayout;
