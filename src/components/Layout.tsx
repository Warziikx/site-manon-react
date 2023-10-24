import { Outlet } from "@tanstack/react-router";
import { Header } from "./Layout/Header";
import { Footer } from "./Layout/Footer";

export const Layout: React.FC = () => (
	<>
		<Header />
		<Outlet />
		<Footer />
	</>
);
