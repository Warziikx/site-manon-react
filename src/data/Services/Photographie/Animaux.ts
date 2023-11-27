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
	description: `
	Parce que nos amis à fourrure ou à crinière font partie intégrante de nos vies, cette prestation photo avec les animaux célèbre
	la complicité unique que nous partageons avec nos compagnons. Que ce soit avec votre chien fidèle, votre majestueux cheval ou
	tout autre ami à quatre pattes, cette séance est là pour capturer la beauté de ces liens incommensurables.
	<br/><br/>
	Imaginez-vous dans des décors enchanteurs, au cœur de la nature ou dans des lieux qui évoquent l'aventure.
	Chaque photo devient une histoire captivante, un instantané de votre connexion spéciale avec vos animaux.
	Que ce soit la fougue et la loyauté d'un chien, la grâce majestueuse d'un cheval, ou la complicité joyeuse avec vos animaux de compagnie,
	chaque cliché capture l'essence de cette relation unique.
	<br/><br/>
	Réservez dès maintenant pour une expérience où vos animaux seront les stars. Laissez-moi immortaliser ces instants de complicité,
	créant des souvenirs qui réchaufferont votre cœur à chaque regard porté sur ces images. Préparez-vous à voir la personnalité unique
	de vos compagnons à quatre pattes prendre vie, transformant chaque photo en une œuvre d'art qui témoigne de l'amour inconditionnel
	et de la beauté de ces précieux moments partagés.

`,
	stepData: {
		title: "Le dérouler d'une seance",
		stepList: [
			{
				description: "On discute de ton projet, defini la date et le lieu",
				image: dotBleu
			},
			{ description: "Shooting", image: dotRose },
			{ description: "Tu choisi le nombre de photo", image: dotRouge },
		],
	},
	pricing: {
		title: "Les Tarifs",
		pricingData: [
			{
				title: "En exterieur",
				priceList: ["5 photos - 90€", "10 photos - 130€", "20 photos - 10€"],
				subtitle:
					"Ces tarifs comprennent les frais de déplacement en Ille-et-Vilaine, la prise de vue et le post traitement",
			},
		],
	},
};
