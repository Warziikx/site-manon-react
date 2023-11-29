import { Router, Route, RootRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";
import { Homepage } from "@/pages/Homepage";
import { Layout } from "./components/Layout";

import { ServiceDetailPage, ServiceGroupePage, ServicePage } from "@/pages/Services";
// Create a root route
const rootRoute = new RootRoute({
  component: Layout,
});

const serviceRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/service",
  component: ServicePage,
});
export const serviceGroupeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/service/$serviceGroupeSlug",
  component: ServiceGroupePage,
});
export const serviceDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/service/$serviceGroupeSlug/$serviceSlug",
  component: ServiceDetailPage,
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Homepage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  serviceRoute,
  serviceGroupeRoute,
  serviceDetailRoute,
  contactRoute,
]);

// Create the router using your route tree
const router = new Router({ routeTree });
export default router;
