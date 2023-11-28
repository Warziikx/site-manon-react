import darkLogo from "@/assets/images/logo-dark.png";

import { Link } from "@tanstack/react-router";
import { menuList, Menu } from "@/contentrain/Menu";
import { useState } from "react";
import { motion } from "framer-motion";
import { MenuButton } from "./MenuButton";
import { DropdownMenuItem } from "./MenuItem/DropdownMenuItem";
import { InternalMenuItem } from "./MenuItem/InternalMenuItem";
import { ExternalMenuItem } from "./MenuItem/ExternalMenuItem";

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
			<div className="bg-primary text-white">
				<div className=" mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 md:px-8 xl:px-0">
					<Link to="/" className="ml-4 flex items-center" aria-current="page">
						<img src={darkLogo} className="mr-3 h-16 py-2" alt="Logo Manon" />
						<span className="self-center whitespace-nowrap font-title text-2xl font-semibold">Manon Bertho</span>
					</Link>
					<ul className="hidden flex-row space-x-8 md:flex ">
						{menuList
							.sort((a: Menu, b: Menu) => a.ordre - b.ordre)
							.map((menu: Menu, index: number) => {
								return (
									<li key={index}>
										{menu.childrenObject != undefined ? (
											<DropdownMenuItem menu={menu} index={index} />
										) : (
											<>
												{menu.relative_url !== undefined && menu.relative_url !== "" && <InternalMenuItem menu={menu} />}
												{menu.external_url !== undefined && menu.external_url !== "" && <ExternalMenuItem menu={menu} />}
											</>
										)}
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
					<Link to="/" className="hover:underline" onClick={closeMenu}>
						Manon Bertho Studio
					</Link>
					. Tous droits réservés.
				</span>
				<Link to="/" className="mb-4 flex items-center sm:mb-0" onClick={closeMenu}>
					<img src={darkLogo} className="mr-3 h-48" alt="Manon Logo" />
				</Link>
				<ul className="space-y-4">
					{menuList.map((menu: Menu) => {
						return (
							<motion.li variants={liVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} key={menu.libelle}>
								{menu.relative_url !== undefined && menu.relative_url !== "" && (
									<Link
										onClick={closeMenu}
										to={menu.relative_url}
										activeProps={{ className: "text-secondary" }}
										activeOptions={{ exact: true }}
										className="block text-center text-2xl transition ease-in-out hover:text-secondary md:p-0"
										aria-current="page"
									>
										{menu.libelle}
									</Link>
								)}
								{menu.external_url !== undefined && menu.external_url !== "" && (
									<a
										href={menu.external_url}
										className="block text-center text-2xl transition ease-in-out hover:text-secondary md:p-0"
									>
										{menu.libelle}
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
