import { Router, Route, RootRoute } from "@tanstack/react-router";
import { Contact } from "./pages/Contact";
import { Homepage } from "./pages/Hompage";
import { Layout } from "./components/Layout";
// Create a root route
const rootRoute = new RootRoute({
	component: Layout,
});


const contactRoute = new Route({
	getParentRoute: () => rootRoute,
	path: "/contact",
	component: Contact,
});

// Create an index route
const indexRoute = new Route({
	getParentRoute: () => rootRoute,
	path: "/",
	component: Homepage,
});

const routeTree = rootRoute.addChildren([indexRoute, contactRoute]);

// Create the router using your route tree
const router = new Router({ routeTree });
export default router;
