import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import Login from "../components/Login";

const loginPageRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

export default loginPageRouter;
