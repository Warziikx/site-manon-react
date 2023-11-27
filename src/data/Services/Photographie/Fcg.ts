import louise2 from "@/assets/images/photo/fcg/louise2.webp";

import dotBleu from "@/assets/images/identite_visuelle/dot-bleu.svg";
import dotRose from "@/assets/images/identite_visuelle/dot-rose.svg";
import dotRouge from "@/assets/images/identite_visuelle/dot-rouge.svg";

import { PrestationData } from "@/data/Service";

export const prestationFcg: PrestationData = {
	type: "right",
	img: louise2,
	slug: "famile",
	title: "Famille - Couple - Grossesse",
	surtitle: "Photographie",
	description: `
  Capturer les moments précieux en famille, immortaliser la complicité d'un couple ou célébrer l'attente d'un
  nouveau chapitre de vie, notre séance photo offre une expérience unique pour tous les moments marquants de ta vie.
  <br/><br/>
  Que vous souhaitiez conserver des souvenirs complices en famille, capturer l'amour qui unit un couple ou documenter
  la douce anticipation de l'arrivée d'un nouveau membre, cette formule est conçue pour rendre chaque instant inoubliable.
  <br/><br/>
  Au cœur de la nature, dans votre cocon familial ou en studio, chaque lieu devient le décor idéal pour mettre en lumière
  les liens qui vous unissent. Les sourires complices, les étreintes chaleureuses et les moments de bonheur authentique sont
  capturés avec soin, transformant chaque cliché en un témoignage visuel de l'amour et de la joie partagés.
  <br/><br/>
  Réservez dès maintenant pour une expérience qui va au-delà de la simple séance photo. Laissez-moi capturer l'essence de
  votre bonheur, créer des souvenirs qui durent et vous offrir des images qui racontent votre histoire avec authenticité et émotion.
  `,
	stepData: {
		title: "Le dérouler d'une seance",
		stepList: [
			{
        description: `Lorsque je démarre un projet, ma première étape consiste à établir le contact et à comprendre les besoins du client. 
        Cela inclut une présentation détaillée de mes services, une écoute attentive de leurs attentes, et une discussion approfondie sur
        les détails spécifiques de la séance.
        Ensuite, je propose différentes options adaptées à leurs besoins, établis un devis personnalisé et clarifie les termes du contrat.
        Enfin, nous planifions ensemble la séance en choisissant la date, le lieu, et en finalisant tous les détails logistiques avant de confirmer les accords contractuels.`,
				image: dotBleu,
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
				priceList: ["5 photos - 80€", "10 photos - 120€", "20 photos - 150€"],
				subtitle: "Ces tarifs comprennent les frais de déplacement en Ille-et-Vilaine, la prise de vue et le post traitement",
			},
		],
	},
};
