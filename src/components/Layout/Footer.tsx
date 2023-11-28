import darkLogo from "@/assets/images/logo-dark.png";

import { menuList, Menu } from "@/data/contentrain/Menu";
import { Link } from "@tanstack/react-router";

export const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="hidden bg-primary md:flex">
			<div className="w-full  p-4 md:py-8">
				<div className="sm:flex sm:items-center sm:justify-between">
					<a href="https://manonbertho-studio.fr/" className="mb-4 flex items-center sm:mb-0">
						<img src={darkLogo} className="mr-3 h-12" alt="Flowbite Logo" />
						<span className=" self-center  whitespace-nowrap font-title text-2xl font-semibold text-white ">Manon Bertho</span>
					</a>
					<ul className="flex flex-row space-x-8 text-white transition">
						{menuList.map((menu: Menu) => {
							return (
								<li key={menu.libelle}>
									{menu.relative_url !== undefined && menu.relative_url !== "" && (
										<Link
											to={menu.relative_url}
											activeProps={{ className: "text-secondary" }}
											activeOptions={{ exact: true }}
											className="block py-2 text-center ease-in-out hover:text-secondary md:p-0"
											aria-current="page"
										>
											{menu.libelle}
										</Link>
									)}
									{menu.external_url !== undefined && menu.external_url !== "" && (
										<a href={menu.external_url} className="block py-2 text-center ease-in-out hover:text-secondary md:p-0">
											{menu.libelle}
										</a>
									)}
								</li>
							);
						})}
					</ul>
				</div>
				<hr className="my-6 border-gray-300  sm:mx-auto lg:my-8" />
				<span className="block text-sm text-gray-300  sm:text-center">
					© {currentYear}{" "}
					<a href="https://manonbertho-studio.fr/" className="hover:underline">
						Manon Bertho Studio
					</a>
					. Tous droits réservés.
				</span>
			</div>
		</footer>
	);
};
