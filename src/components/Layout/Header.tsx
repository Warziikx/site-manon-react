import darkLogo from "@/assets/images/logo-dark.png";
import logo from "@/assets/images/logo.png";

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HalfMoon, SunLight } from "iconoir-react";
import useThemeContext from "../../context/ThemeContext";

export const Header: React.FC = () => {
	const { dark, toggleDark } = useThemeContext();
	return (
		<nav className="bg-link-water dark:bg-primary fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="https://manonbertho-studio.fr/" className="flex items-center">
					<img src={dark ? logo : darkLogo} className="h-16 mr-3" alt="Flowbite Logo" />
					<span className="self-center text-2xl font-semibold font-title whitespace-nowrap dark:text-white">
						Manon Bertho
					</span>
				</a>
				<div className="flex md:order-2">
					<motion.div
						onClick={() => toggleDark(!dark)}
						className="box cursor-pointer"
						whileHover={dark ? {} : { rotate: [0, 180, 180, 0] }}
					>
						{dark ? <HalfMoon /> : <SunLight color="white" />}
					</motion.div>
					<button
						data-collapse-toggle="navbar-sticky"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-sticky"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-sticky"
				>
					<ul
						className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 
					rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700"
					>
						<li>
							<Link
								to="/"
								activeProps={{ className: "md:text-accent md:dark:text-ternary" }}
								activeOptions={{ exact: true }}
								className="block py-2 pl-3 pr-4 text-gray-900 rounded
								md:hover:bg-transparent md:hover:text-accent md:p-0 md:dark:hover:text-ternary transition ease-in-out
								dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								aria-current="page"
							>
								Accueil
							</Link>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 pl-3 pr-4 text-gray-900 rounded
								md:hover:bg-transparent md:hover:text-accent md:p-0 md:dark:hover:text-ternary transition ease-in-out
								dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 pl-3 pr-4 text-gray-900 rounded transition ease-in-out
								md:hover:bg-transparent md:hover:text-accent md:p-0 md:dark:hover:text-ternary
								dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>
								Services
							</a>
						</li>
						<li>
							<Link
								to="/contact"
								activeProps={{ className: "md:text-accent md:dark:text-ternary" }}
								activeOptions={{ exact: true }}
								className="block py-2 pl-3 pr-4 text-gray-900 rounded transition ease-in-out
								md:hover:bg-transparent md:hover:text-accent md:p-0 md:dark:hover:text-ternary 
								dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
