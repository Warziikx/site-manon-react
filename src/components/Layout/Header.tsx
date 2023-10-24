import darkLogo from "@/assets/images/logo-dark.png";
import logo from "@/assets/images/logo.png";

import { Link } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { HalfMoon, SunLight } from "iconoir-react";

import { menuList, Menu } from "@/data/Menu";
import useThemeContext from "@/context/ThemeContext";
import { useState } from "react";
import { motion } from "framer-motion";

const menu = {
	open: () => ({
		clipPath: `circle(4000px at 90% 10%)`,
		transition: {
			type: "spring",
			stiffness: 40,
			restDelta: 2,
		},
	}),
	closed: {
		height: 0,
		clipPath: "circle(30px at 90% 10%)",
		transition: {
			delay: 0.4,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

const ulVariants = {
	open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
	closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};
const liVariants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: 100 },
		},
	},
	closed: {
		y: -50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export const Header: React.FC = () => {
	const { dark } = useThemeContext();
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

	const closeMenu = () => {
		setMobileMenuOpen(false);
	};
	return (
		<motion.nav
			animate={mobileMenuOpen ? "open" : "closed"}
			className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-link-water dark:border-gray-600 dark:bg-primary"
		>
			<div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
				<a href="https://manonbertho-studio.fr/" className="flex items-center ml-4">
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
						className="inline-flex h-10 w-10 mr-4 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100  md:hidden"
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
				<motion.div
					variants={menu}
					className={` w-full border md:border-0 items-center justify-between md:order-1 md:flex md:w-auto`}
					id="navbar-sticky"
				>
					<motion.ul
						variants={ulVariants}
						className="flex flex-col p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0"
					>
						{menuList.map((menu: Menu) => {
							return (
								<motion.li variants={liVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} key={menu.name}>
									<Link
										onClick={closeMenu}
										to={menu.path}
										activeProps={{ className: "text-accent" }}
										activeOptions={{ exact: true }}
										className="block py-2 text-center text-gray-900 transition ease-in-out md:p-0 hover:text-accent"
										aria-current="page"
									>
										{menu.name}
									</Link>
								</motion.li>
							);
						})}
					</motion.ul>
				</motion.div>
			</div>
		</motion.nav>
	);
};
