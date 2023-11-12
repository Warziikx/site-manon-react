import tarteCut from "@/assets/images/photo/packshot/tarte_cut.webp";

import dotBleu from "@/assets/images/identite_visuelle/dot-bleu.svg";
import dotRose from "@/assets/images/identite_visuelle/dot-rose.svg";
import dotRouge from "@/assets/images/identite_visuelle/dot-rouge.svg";


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
					image : dotBleu
				},
				{ description: "Shooting", image : dotRose },
				{ description: "Tu chosii le nombre de photo", image : dotRouge },
			],
		},
		pricing: {
			title: "Les Tarifs",
			pricingData: [
				{
					title: "",
					priceList: ["5 photos - 80€", "10 photos - 120€", "20 photos - 150€"],
					subtitle: "Ces tarifs comprennent la location du studio, la prise de vue et le post traitement",
				},
			],
		},
};
