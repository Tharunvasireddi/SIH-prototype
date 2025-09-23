import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import Analytics from "../pages/Ananlytic";

const analyticPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ananlytic",
  component: Analytics,
});

export default analyticPage;
