import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import About from "../components/About";

const aboutPageRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

export default aboutPageRouter;
