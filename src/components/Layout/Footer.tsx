import smallLogo from "@/assets/images/small-logo.png";

export const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-link-water dark:bg-primary">
			<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<div className="sm:flex sm:items-center sm:justify-between">
					<a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
						<img src={smallLogo} className="h-8 mr-3" alt="Flowbite Logo" />
						<span className="self-center text-2xl font-semibold font-title whitespace-nowrap dark:text-white">
							Manon Bertho
						</span>
					</a>
					<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6 ">
								About
							</a>
						</li>
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6 ">
								Licensing
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
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
