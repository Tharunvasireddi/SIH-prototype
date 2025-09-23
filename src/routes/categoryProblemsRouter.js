import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import CategoryProblems from "../pages/CategoryProblems";

const categoryProblemsRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/analytics/category/$category",
  component: CategoryProblems,
  validateSearch: () => ({}),
});

export default categoryProblemsRouter;
