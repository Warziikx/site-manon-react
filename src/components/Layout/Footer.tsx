import smallLogo from "@/assets/images/small-logo.png";

import { menuList, Menu } from "@/data/Menu";
import { Link } from "@tanstack/react-router";

export const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="hidden md:flex bg-link-water dark:bg-primary">
			<div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
				<div className="sm:flex sm:items-center sm:justify-between">
					<a href="https://flowbite.com/" className="mb-4 flex items-center sm:mb-0">
						<img src={smallLogo} className="mr-3 h-8" alt="Flowbite Logo" />
						<span className="self-center whitespace-nowrap font-title text-2xl font-semibold dark:text-white">
							Manon Bertho
						</span>
					</a>
					<ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
						{menuList.map((menu: Menu) => {
							return (
								<li key={menu.name}>
									<Link
										to={menu.path}
										activeProps={{ className: "md:text-accent md:dark:text-ternary" }}
										activeOptions={{ exact: true }}
										className="mr-4 transition
											ease-in-out dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:mr-6
											md:p-0 md:hover:bg-transparent md:hover:text-accent md:dark:hover:bg-transparent md:dark:hover:text-ternary"
										aria-current="page"
									>
										{menu.name}
									</Link>
								</li>
							)
						})}
					</ul>
				</div>
				<hr className="my-6 border-gray-500 dark:border-gray-400 sm:mx-auto lg:my-8" />
				<span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
					© {currentYear}{" "}
					<a href="https://manonbertho-studio.fr/" className="hover:underline">
						Manon Bertho Studio
					</a>
					. Tous droits réservés.
				</span>
			</div>
		</footer >
	);
};
