import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import MapView from "../pages/MapVeiw";

const mapviewRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mapview",
  component: MapView,
});

export default mapviewRouter;
