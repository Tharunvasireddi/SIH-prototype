import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import CategoryDetails from "../components/CategoryDetails";

const categoryDetailsRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/category/$category",
  component: CategoryDetails,
});

export default categoryDetailsRouter;
