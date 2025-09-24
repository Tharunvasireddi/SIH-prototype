import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import CategoryDetails from "../components/CategoryDetails";

const categoryDetailsRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/category/$category",
  component: CategoryDetails,
  validateSearch: () => ({}),
  beforeLoad: ({ params }) => {
    console.log("Route beforeLoad - params:", params);
  },
});

export default categoryDetailsRouter;
