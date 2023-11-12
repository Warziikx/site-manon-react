import tarteCut from "@/assets/images/photo/packshot/tarte_cut.webp";

import { PrestationData } from "@/data/Service";

export const prestationPackshot: PrestationData = {
	type: "right",
	slug: "packshot",
	img: tarteCut,
	title: "Packshot",
	surtitle: "Photographie",
	description:
		"Besoin de réaliser des packshot produit ou nourriture pour de la création de contenue ou un site web ? Cette formules est la pour vous !",
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
