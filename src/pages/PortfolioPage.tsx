import { CallToAction } from "@/components/Widget/CallToAction";

export const PortfolioPage: React.FC = () => {
	return (
		<div className="mt-0 md:mt-16">
			{/* <div className="px-16 md:px-24 lg:px-32"> */}
			<h1 className="pt-16 text-center font-title text-4xl">Découvrez mes prestations photo</h1>
			{/* </div> */}
			<CallToAction />
		</div>
	);
};
