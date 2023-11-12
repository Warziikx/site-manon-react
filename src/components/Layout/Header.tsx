import darkLogo from "@/assets/images/logo-dark.png";

import { Link } from "@tanstack/react-router";

import { menuList, Menu } from "@/data/Menu";
import { useState } from "react";
import { motion } from "framer-motion";
import { MenuButton } from "./MenuButton";

const ulVariants = {
	open: () => ({
		opacity: 1,
		clipPath: `circle(${1000 * 2 + 200}px at 86vw -95vh)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
			delayChildren: 0.3,
			staggerChildren: 0.05,
		},
	}),
	closed: {
		opacity: 0,
		clipPath: "circle(30px at 86vw 95vh)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
			staggerChildren: 0.05,
		},
	},
};

const liVariants = {
	open: {
		y: 0,
		x: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: 100 },
		},
	},
	closed: {
		y: 80,
		x: 60,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export const Header: React.FC = () => {
	const currentYear = new Date().getFullYear();
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

	const closeMenu = () => {
		setMobileMenuOpen(false);
	};
	return (
		<motion.nav
			initial={false}
			animate={mobileMenuOpen ? "open" : "closed"}
			className="fixed bottom-0 left-0 z-20 h-16 w-full md:top-0"
		>
			<div className="border-t border-gray-800 bg-primary text-white md:border-b">
				<div className=" mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 md:px-8 xl:px-0">
					<a href="https://manonbertho-studio.fr/" className="ml-4 flex items-center">
						<img src={darkLogo} className="mr-3 h-16 py-2" alt="Logo Manon" />
						<span className="self-center whitespace-nowrap font-title text-2xl font-semibold">
							Manon Bertho
						</span>
					</a>
					<ul className="hidden flex-row space-x-8 md:flex ">
						{menuList.map((menu: Menu) => {
							return (
								<li key={menu.name}>
									<Link
										onClick={closeMenu}
										to={menu.path}
										activeProps={{ className: "text-secondary" }}
										activeOptions={{ exact: true }}
										className="block py-2 text-center transition ease-in-out hover:text-secondary md:p-0"
										aria-current="page"
									>
										{menu.name}
									</Link>
								</li>
							);
						})}
					</ul>
					<MenuButton
						isOpen={mobileMenuOpen}
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="z-50 mr-4 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm md:hidden"
						strokeWidth="2"
						color="#ffffff"
						height={6}
						width={6}
					/>
				</div>
			</div>
			{/* Mobile */}
			<motion.div
				variants={ulVariants}
				className="flex flex-col items-center justify-between bg-primary py-8 text-white"
				style={{
					height: "calc(100vh)",
					marginTop: "-100vh",
					pointerEvents: mobileMenuOpen ? "auto" : "none",
				}}
			>
				<span className="block px-8 text-center text-sm text-gray-300 sm:text-center">
					© {currentYear}{" "}
					<a href="https://manonbertho-studio.fr/" className="hover:underline">
						Manon Bertho Studio
					</a>
					. Tous droits réservés.
				</span>
				<a href="https://manonbertho-studio.fr/" className="mb-4 flex items-center sm:mb-0">
					<img src={darkLogo} className="mr-3 h-48" alt="Manon Logo" />
				</a>
				<ul className="space-y-4">
					{menuList.map((menu: Menu) => {
						return (
							<motion.li
								variants={liVariants}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								key={menu.name}
							>
								{menu.path !== null && (
									<Link
										onClick={closeMenu}
										to={menu.path}
										activeProps={{ className: "text-secondary" }}
										activeOptions={{ exact: true }}
										className="block text-center text-2xl transition ease-in-out hover:text-secondary md:p-0"
										aria-current="page"
									>
										{menu.name}
									</Link>
								)}
								{menu.external !== null && (
									<a
										href={menu.external}
										className="block text-center text-2xl transition ease-in-out hover:text-secondary md:p-0"
									>
										{menu.name}
									</a>
								)}
							</motion.li>
						);
					})}
				</ul>
			</motion.div>
		</motion.nav>
	);
};
