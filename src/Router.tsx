import { Router, Route, RootRoute } from "@tanstack/react-router";
import { ContactPage } from "./pages/ContactPage";
import { Homepage } from "./pages/Homepage";
import { Layout } from "./components/Layout";
import { ServicePage } from "@/pages/ServicePage";
// Create a root route
const rootRoute = new RootRoute({
	component: Layout,
});

const serviceRoute = new Route({
	getParentRoute: () => rootRoute,
	path: "/services",
	component: ServicePage,
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

const routeTree = rootRoute.addChildren([indexRoute, serviceRoute, contactRoute]);

// Create the router using your route tree
const router = new Router({ routeTree });
export default router;
