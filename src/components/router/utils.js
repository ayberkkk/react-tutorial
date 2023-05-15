import routes from "./pages/routers";
import { generatePath } from "react-router-dom";

export const url = (path, params) => {
  let lastRoute, url;

  path.split(".").forEach((p) => {
    if (!lastRoute) {
      lastRoute = routes.find((r) => r.name === p);
      if (lastRoute) {
        url = lastRoute.path;
      }
    } else {
      lastRoute = lastRoute.children.find((r) => r.name === p);
      if (lastRoute) {
        url += "/" + lastRoute.path;
      }
    }
  });

  if (url) {
    return generatePath(url.replace(/\/+/g, "/"), params);
  }

  return null;
};
