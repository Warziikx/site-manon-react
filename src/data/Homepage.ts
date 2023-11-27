import dotBleu from "@/assets/images/identite_visuelle/dot-bleu.svg";
import dotRose from "@/assets/images/identite_visuelle/dot-rose.svg";
import dotRouge from "@/assets/images/identite_visuelle/dot-rouge.svg";

export interface NumberFeature {
	description: string;
	image: string;
}

export const whyMeFeatures: NumberFeature[] = [
	{
		description:
			"Capturer l'instant, figer l'émotion. Que ce soit pour des événements spéciaux, des portraits ou des moments du quotidien, chaque photo raconte une histoire unique. Mon objectif est de saisir la quintessence de chaque instant, immortalisant des moments précieux que vous chérirez pour toujours.",
		image: dotBleu,
	},
	{
		description: `Donnez vie à vos événements avec une papeterie exceptionnelle. 
      Je fusionne la photographie avec l'art graphique pour concevoir des supports uniques et mémorables. 
      Chaque détail est soigneusement orchestré, depuis les images capturées spécialement pour vous jusqu'à la mise en page élégante. 
      Offrez à votre papeterie (Fairs&nbsp;part, invitation) une touche personnelle et faites de chaque moment une expérience à part entière`,
		image: dotRose,
	},
	{
		description:
			"Votre entreprise a une histoire à raconter, une identité à affirmer. À travers mon service complet de création d'identité visuelle, je marie l'art photographique au design graphique pour donner vie à la personnalité unique de votre entreprise. Des portraits évocateurs aux images de produits captivantes, chaque photo est soigneusement intégrée, contribuant à une identité visuelle distinctive. Faites une première impression mémorable et construisez une image de marque forte avec une identité visuelle qui vous distingue sur le marché.",
		image: dotRouge,
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
