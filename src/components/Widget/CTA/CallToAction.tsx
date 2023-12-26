import { Link } from "@tanstack/react-router";

export const CallToAction: React.FC = () => {
	return (
		<section className="bg-link-water">
			<div className="px-4 py-8 sm:py-16 lg:px-6">
				<div className="text-center">
					<h4 className="mb-4 font-title text-4xl font-extrabold leading-tight tracking-tight text-gray-900 ">
						Mon univers vous inspire ?
					</h4>
					{/* <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
						N'hesiter pas à me contacter
					</p> */}
					<Link
						resetScroll={true}
						to="/contact"
						className="mb-2 focus:outline-none mr-2 rounded-lg bg-ternary px-5 
						py-2.5 text-sm font-medium text-white hover:bg-ternary-500"
					>
						Contactez-moi
					</Link>
				</div>
			</div>
		</section>
	);
};
