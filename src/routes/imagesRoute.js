import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import Images from "../components/Images";

const imagesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/images",
  component :Images
});

export default imagesRoute;
