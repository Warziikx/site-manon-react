import { Hero } from "@/components/Hero";
import { NumberFeatures } from "@/components/Features/NumberFeatures";
import { Presentation } from "@/components/Presentation";

import { WhyMeFeatures, PrestationFeatures } from "@/data/Homepage";
import { IllustrationFeatures } from "@/components/Features/IllustrationFeatures";
import { Testimonial1 } from "@/components/Testimonial/Testimonial1";

export const Homepage: React.FC = () => {
	return (
		<div className="mt-0 md:mt-16">
			<Hero />
			<Presentation />
			<NumberFeatures title="Pourquoi travailer avec moi ?" featuresList={WhyMeFeatures} />
			<IllustrationFeatures title="Mes Prestations" featuresList={PrestationFeatures} />
			<Testimonial1 />
		</div>
	);
};
