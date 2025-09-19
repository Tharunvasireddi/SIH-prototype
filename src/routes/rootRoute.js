import { createRootRoute } from "@tanstack/react-router";
import App from "../App";
import homepageRouter from "./homepage";
import contactRouter from "./contactpageRouter";
import featuresRoute from "./feturesRouter";
import aboutPageRouter from "./aboutPageRouter";
import imagesRoute from "./imagesRoute";
import dashboardRouter from "./dashboardRout";
import centralDashBoardRouter from "./centraldashboardRouter";
import registerPageRouter from "./registerPageRouter";
import loginPageRouter from "./loginPageRouter";
export const rootRoute = createRootRoute({
  component: App,
});

export const routeTree = rootRoute.addChildren([
  homepageRouter,
  contactRouter,
  featuresRoute,
  aboutPageRouter,
  imagesRoute,
  dashboardRouter,
  centralDashBoardRouter,
  registerPageRouter,
  loginPageRouter,
]);
