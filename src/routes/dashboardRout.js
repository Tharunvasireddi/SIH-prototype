import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import DashBoard from "../components/DashBoard";

const dashboardRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashBoard,
});

export default dashboardRouter;
