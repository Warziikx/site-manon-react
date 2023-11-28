import { Prestation } from "@/components/Service/Prestation";

import { CallToAction } from "@/components/Widget/CallToAction";
import { mesPrestationPhoto, PrestationData } from "@/data/Service";

export const ServicePage: React.FC = () => {
	return (
		<div className="mt-0 md:mt-16">
			<h1 className="pt-16 text-center font-title text-4xl">Découvrez mes prestations photo</h1>
			{mesPrestationPhoto.map((prestation: PrestationData, i: number) => {
				return (
					<div key={prestation.slug}>
						<Prestation prestation={prestation} />
						{i < mesPrestationPhoto.length && (
							<div className="px-16 sm:hidden">
								<hr />
							</div>
						)}
					</div>
				);
			})}
			<CallToAction />
		</div>
	);
};
