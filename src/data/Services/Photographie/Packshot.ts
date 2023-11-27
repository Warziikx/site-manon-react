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
		`
		Vous êtes un professionnel, conscient de l'importance de l'image dans le monde des affaires.
		Notre prestation de packshot offre une solution complète pour sublimer vos produits et renforcer votre présence sur le marché.
		<br/><br/>
		Chaque cliché est pensé avec précision pour mettre en valeur les détails, la qualité et l'unicité de vos articles.
		Que vous soyez dans le secteur de la mode, de l'alimentation ou de tout autre domaine, je vous accompagne dans la
		création des images exceptionnelles qui reflètent l'excellence de votre marque.
		<br/><br/>
		Optez pour la prestation de packshot et donnez à vos produits l'attention visuelle qu'ils méritent.
		Renforcez votre identité de marque, stimulez vos ventes et positionnez-vous en tant que leader dans votre secteur.
		Contactez-moi dès maintenant pour discuter de la manière dont nous pouvons mettre en lumière le meilleur de votre
		entreprise à travers des images qui parlent à votre clientèle cible.
		`,
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
