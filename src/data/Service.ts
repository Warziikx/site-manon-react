import { NumberFeature } from "@/data/Homepage";

interface PrestationPrincingData {
	title: string;
	priceList: string[];
	subtitle: string;
}

export interface PrestationData {
	type: "left" | "right";
	slug: string;
	img: string;
	title: string;
	surtitle: string;
	description: string;
	stepData: {
		title: string;
		stepList: NumberFeature[];
	};
	princingData: {
		title: string;
		pricingData: PrestationPrincingData[];
	};
}

import { prestationSelfLove, prestationFcg, prestationEvenement, prestationPackshot } from "@/data/Services";

export const mesPrestationPhoto: PrestationData[] = [
	prestationSelfLove,
	prestationFcg,
	prestationEvenement,
	prestationPackshot,
];
