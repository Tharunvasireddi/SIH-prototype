import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import Contact from "../components/Contact";

const contactRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

export default contactRouter;
