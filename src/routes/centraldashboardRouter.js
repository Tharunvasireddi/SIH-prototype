import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import CentralDashboard from "../components/CentralDashboard";

const centralDashBoardRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/centraldashboard",
  component: CentralDashboard,
});

export default centralDashBoardRouter;
