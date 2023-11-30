import { Router, Route, RootRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

import { Homepage, ServiceDetailPage, ServiceGroupePage, ServicePage, PortfolioPage, ContactPage, PortfolioDetailPage } from "@/pages";
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

export const portfolioRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: PortfolioPage,
});

export const portfolioDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/portfolio/$portfolioSlug",
  component: PortfolioDetailPage,
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
  portfolioRoute,
  portfolioDetailRoute,
  contactRoute,
]);

// Create the router using your route tree
const router = new Router({ routeTree });
export default router;
