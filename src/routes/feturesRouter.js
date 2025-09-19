import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import Features from "../components/Fetures";

const featuresRoute = createRoute({
  getParentRoute: ()=> rootRoute,
  path: "/features",
  component: Features,
});

export default featuresRoute;
