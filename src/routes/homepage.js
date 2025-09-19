import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import Home from "../components/Home";

const homepageRouter = createRoute({
  getParentRoute: ()=> rootRoute,
  path: "/",
  component: Home,
});

export default homepageRouter;
