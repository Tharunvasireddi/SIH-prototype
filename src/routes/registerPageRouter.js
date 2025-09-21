import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import Register from "../components/Register";

const registerPageRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: Register,
});

export default registerPageRouter;
