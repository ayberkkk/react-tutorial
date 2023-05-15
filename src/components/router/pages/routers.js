import Blog from "./blog/Blog";
import Categories from "./blog/Categories";
import PostUrl from "./blog/PostUrl";
import BlogLayout from "./blog/Index";
import Contact from "./Contact";
import Home from "./Home";
import HomeLayout from "./HomeLayout";
import Profile from "./Profile";
import AuthLayout from "./auth/AuthLayout";
import Login from "./auth/Login";
import Page404 from "./Page404";
import PrivateRoute from "../../PrivateRoute";

const routers = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        name: "home",
        element: <Home />,
      },
      {
        path: "blog",
        name: "Blog",
        element: <BlogLayout />,
        children: [
          {
            index: true,
            auth: true,
            element: <Blog />,
          },
          {
            path: "categories",
            name: "categories",
            element: <Categories />,
          },
          {
            path: "postUrl",
            name: "post",
            element: <PostUrl />,
          },
        ],
      },
      {
        path: "contact",
        name: "contact",
        element: <Contact />,
      },
      {
        path: "profile",
        name: "profile",
        auth: true,
        element: <Profile />,
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      {
        path: "*",
        name: "notFound",
        element: <Page404 />,
      },
    ],
  },
];

const authMap = (routers) =>
  routers.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authMap(route.children);
    }
    return route;
  });

export default authMap(routers);
