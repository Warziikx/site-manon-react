export interface NumberFeature {
	description: string;
	backgroundColor: string;
}

export const WhyMeFeatures: NumberFeature[] = [
	{
		description:
			"Tu souhaites reprendre confiance en toi ou juste te faire plaisir avec un shooting photos. C'est possible",
		backgroundColor: "bg-secondary",
	},
	{
		description:
			"Tu as une heureuse nouvelle à annoncer (Mariage, naissance, ...) ? Je peux m'occuper de la séance photos et de la conception des faires parts",
		backgroundColor: "bg-ternary",
	},
	{
		description:
			"Tu as un professionnelle et tu souhaites revoir l'identitée de ta marque ? Je peux travailler sur ta nouvelle identité graphique et la création de tes contenus print et digitaux",
		backgroundColor: "bg-accent",
	},
];

export interface IllustrationFeature {
	title: string;
	image: string;
	list: string[];
}

import graphisme from "@/assets/images/homepage/prestation/prestation_graphisme.svg";
import photo from "@/assets/images/homepage/prestation/prestation_photo.svg";
export const PrestationFeatures: IllustrationFeature[] = [
	{
		title: "Photographie",
		image: photo,
		list: ["Portraits (Self-love)", "Famille (Couple, Grossesse)", "Evenement (Mariage)", "Packshot"],
	},
	{ title: "Graphisme", image: graphisme, list: ["Identitée visuelle", "Papeterie", "Illustration"] },
];
