import traiteurByd1 from "@/assets/images/photo/evenement/traiteur_byd1.webp";

import { PrestationData } from "@/data/Service";

export const prestationEvenement: PrestationData = {
	type: "left",
	img: traiteurByd1,
	slug: "evenement",
	title: "Evenement",
	surtitle: "Photographie",
	description: "Une evenement à immortaliser, un mariage, une bapthème...",
	stepData: {
		title: "Le dérouler d'une seance",
		stepList: [
			{
				description: "One discute de ton projet, defini la date et le lieu",
				backgroundColor: "bg-secondary",
			},
			{ description: "Shooting", backgroundColor: "bg-ternary" },
			{ description: "Tu choisi le nombre de photo", backgroundColor: "bg-accent" },
		],
	},
};
