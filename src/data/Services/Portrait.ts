import enora2 from "@/assets/images/photo/portrait/enora2.webp";

import { PrestationData } from "@/data/Service";

export const prestationSelfLove: PrestationData = {
	type: "left",
	slug: "portrait",
	img: enora2,
	title: "Portrait - Self Love",
	surtitle: "Photographie",
	description: `Envie de reprendre confiance en toi à travers un shooting photo ou bien tout simplement te faire plaisir ? 
	En exterieur ou en studio, cette formule est faite pour toi`,
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
	princingData: {
		title: "Tarif",
		pricingData: [
			{
				title: "En Studio",
				priceList: ["5 photos - 100€", "10 photos - 150€", "20 photos - 200€"],
				subtitle: "Ces tarifs comprennent la location du studio, la prise de vue et le post traitement",
			},
			{
				title: "En exterieur",
				priceList: ["5 photos - 60€", "10 photos - 100€", "20 photos - 130€"],
				subtitle:
					"Ces tarifs comprennent les frais de déplacement en ile et vilaine, la prise de vie et le post traitement",
			},
		],
	},
};
