import louise2 from "@/assets/images/photo/fcg/louise2.webp";

import { PrestationData } from "@/data/Service";

export const prestationFcg: PrestationData = {
	type: "right",
	img: louise2,
	slug: "famile",
	title: "Famille - Couple - Grossesse",
	surtitle: "Photographie",
	description:
		"Envie d'une séance à deux, à troix, ou d'immortaliser une grossesse ? Cette formule est la pour toi",
	stepData: {
		title: "Le dérouler d'une seance",
		stepList: [
			{
				description: "One discute de ton projet, defini la date et le lieu",
				backgroundColor: "bg-secondary",
			},
			{ description: "Shooting", backgroundColor: "bg-ternary" },
			{ description: "Tu chosii le nombre de photo", backgroundColor: "bg-accent" },
		],
	},
};
