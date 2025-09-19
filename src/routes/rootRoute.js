import { createRootRoute } from "@tanstack/react-router";
import App from "../App";
import homepageRouter from "./homepage";
import contactRouter from "./contactpageRouter";
import featuresRoute from "./feturesRouter";

export const rootRoute = createRootRoute({
  component: App,
});

export const routeTree = rootRoute.addChildren([
homepageRouter,
contactRouter,
featuresRoute
])
