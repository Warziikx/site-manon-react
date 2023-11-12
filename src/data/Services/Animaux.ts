import maelle2 from "@/assets/images/photo/portrait/maelle2.webp";

import dotBleu from "@/assets/images/identite_visuelle/dot-bleu.svg";
import dotRose from "@/assets/images/identite_visuelle/dot-rose.svg";
import dotRouge from "@/assets/images/identite_visuelle/dot-rouge.svg";

import { PrestationData } from "@/data/Service";

export const prestationAnimaux: PrestationData = {
	type: "left",
	slug: "animaux",
	img: maelle2,
	title: "Animaux",
	surtitle: "Photographie",
	description: `Envie de reprendre confiance en toi à travers un shooting photo ou bien tout simplement te faire plaisir ? 
	En exterieur ou en studio, cette formule est faite pour toi`,
	stepData: {
		title: "Le dérouler d'une seance",
		stepList: [
			{
				description: "On discute de ton projet, defini la date et le lieu",
				image : dotBleu
			},
			{ description: "Shooting", image : dotRose },
			{ description: "Tu choisi le nombre de photo", image : dotRouge },
		],
	},
	pricing: {
		title: "Les Tarifs",
		pricingData: [
			{
				title: "En exterieur",
				priceList: ["5 photos - 90€", "10 photos - 130€", "20 photos - 10€"],
				subtitle:
					"Ces tarifs comprennent les frais de déplacement en ile et vilaine, la prise de vie et le post traitement",
			},
		],
	},
};
