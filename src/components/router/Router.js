import { useRoutes } from "react-router-dom";
import routers from "./pages/routers";
import "./Index.scss";

const Router = () => {
  return useRoutes(routers);
};

export default Router;
