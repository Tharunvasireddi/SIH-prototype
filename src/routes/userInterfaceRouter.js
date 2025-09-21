import { createRoute } from "@tanstack/react-router";
import ReportIssue from "../components/Userform";
import { rootRoute } from "./rootRoute";

const userInterface = createRoute({
  getParentRoute: () => rootRoute,
  path: "/userInterface",
  component: ReportIssue,
});

export default userInterface;
