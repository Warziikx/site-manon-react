import darkLogo from "@/assets/images/logo-dark.png";
import logo from "@/assets/images/logo.png";

import { Link } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { HalfMoon, SunLight } from "iconoir-react";

import { menuList, Menu } from "@/data/Menu";
import useThemeContext from "@/context/ThemeContext";
import { useState } from "react";

export const Header: React.FC = () => {
	const { dark } = useThemeContext();
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
	return (
		<nav className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-link-water dark:border-gray-600 dark:bg-primary">
			<div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
				<a href="https://manonbertho-studio.fr/" className="flex items-center">
					<img src={dark ? darkLogo : logo} className="mr-3 h-16" alt="Flowbite Logo" />
					<span className="self-center whitespace-nowrap font-title text-2xl font-semibold dark:text-white">Manon Bertho</span>
				</a>
				<div className="flex md:order-2">
					{/* <motion.div
						onClick={() => toggleDark(!dark)}
						className="cursor-pointer"
						whileHover={dark ? {} : { rotate: [0, 180, 180, 0] }}
					>
						{dark ? <SunLight color="white" /> : <HalfMoon />}
					</motion.div> */}
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						data-collapse-toggle="navbar-sticky"
						type="button"
						className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
						aria-controls="navbar-sticky"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
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
				<div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
					<ul
						className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium 
					dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0"
					>
						{menuList.map((menu: Menu) => {
							return (
								<li key={menu.name}>
									<Link
										to={menu.path}
										activeProps={{ className: "md:text-accent md:dark:text-ternary" }}
										activeOptions={{ exact: true }}
										className="block rounded py-2 pl-3 pr-4 text-gray-900
												transition ease-in-out dark:border-gray-700 dark:text-white dark:hover:bg-gray-700
												dark:hover:text-white md:p-0 md:hover:text-accent md:dark:hover:bg-transparent md:dark:hover:text-ternary"
										aria-current="page"
									>
										{menu.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
