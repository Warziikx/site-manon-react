import enora2 from "@/assets/images/photo/portrait/enora2.webp";

import dotBleu from "@/assets/images/identite_visuelle/dot-bleu.svg";
import dotRose from "@/assets/images/identite_visuelle/dot-rose.svg";
import dotRouge from "@/assets/images/identite_visuelle/dot-rouge.svg";

import { PrestationData } from "@/data/Service";

export const prestationSelfLove: PrestationData = {
	type: "left",
	slug: "portrait",
	img: enora2,
	title: "Portrait - Self Love",
	surtitle: "Photographie",
	description: `Envie de reprendre confiance en toi à travers un shooting photo ou bien tout simplement te faire plaisir ? 
	Que ce soit au cœur de la nature, ou en studio, la formule de portrait / Self Love est faite pour toi.
	</br></br>
	C'est bien plus qu'une simple séance photo, c'est une expérience qui capture l'authenticité de qui tu es.
	En extérieur, la lumière naturelle et les décors variés deviennent le cadre idéal pour révéler ta beauté naturelle.
	Chaque instant devient une opportunité de capturer des expressions spontanées, des émotions sincères et de créer des souvenirs qui durent.
	</br></br>
	Si tu préfères l'intimité d'un studio, nous façonnons l'éclairage et l'ambiance pour mettre en lumière ta personnalité de manière unique.
	Chaque expression, chaque nuance, est capturée avec une précision artistique, transformant la séance en une véritable célébration de toi-même.
	</br></br>
	Prêt(e) à explorer des lieux magnifiques tout en mettant en lumière ce qui te rend exceptionnel(le) ?
	Cette aventure photographique en extérieur t'offre l'opportunité de célébrer ta beauté naturelle d'une manière totalement authentique.
	Réserve dès maintenant et laisse-nous capturer la meilleure version de toi-même, dans des décors qui feront écho à la richesse de ta personnalité.
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
				title: "En Studio",
				priceList: ["5 photos - 100€", "10 photos - 150€", "20 photos - 200€"],
				subtitle: "Ces tarifs comprennent la location du studio, la prise de vue et le post traitement",
			},
			{
				title: "En exterieur",
				priceList: ["5 photos - 60€", "10 photos - 100€", "20 photos - 150€"],
				subtitle:
					"Ces tarifs comprennent les frais de déplacement en Ille-et-Vilaine, la prise de vue et le post traitement",
			},
		],
	},
};
