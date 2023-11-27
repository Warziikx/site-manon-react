import traiteurByd1 from "@/assets/images/photo/evenement/traiteur_byd1.webp";

import dotBleu from "@/assets/images/identite_visuelle/dot-bleu.svg";
import dotRose from "@/assets/images/identite_visuelle/dot-rose.svg";
import dotRouge from "@/assets/images/identite_visuelle/dot-rouge.svg";

import { PrestationData } from "@/data/Service";

export const prestationEvenement: PrestationData = {
  type: "left",
  img: traiteurByd1,
  slug: "evenement",
  title: "Evenement",
  surtitle: "Photographie",
  description: `
  Chaque moment spécial mérite d'être capturé avec une précision et une sensibilité qui transcendent le simple cliché.
  En tant que photographe d'événements, ma mission est de transformer les moments éphémères en souvenirs éternels,
  figeant l'émotion et la beauté de chaque instant.
  <br/><br/>
  Que ce soit pour immortaliser l'amour partagé lors d'un mariage, la joie contagieuse d'un baptême ou tout autre événement
  marquant, je suis là pour saisir l'essence même de chaque occasion. Chaque détail compte, chaque regard, chaque sourire,
  chaque émotion raconte une histoire unique.
  <br/><br/>
  Le jour de votre mariage, laissez-nous capturer la magie de l'amour qui unit deux personnes. Chaque photo devient un
  témoignage visuel de cet engagement profond, une histoire d'amour racontée à travers des images qui traverseront les générations.
  <br/><br/>
  Pour un baptême, chaque rire d'enfant, chaque émotion partagée entre amis et famille, est immortalisé avec une délicatesse
  particulière. Chaque cliché devient un héritage visuel, un témoignage précieux de ce moment de célébration et de spiritualité.
  <br/><br/>
  Mon approche discrète mais attentive me permet de capturer l'authenticité de chaque moment sans perturber le déroulement
   naturel de l'événement. Que vous préfériez des clichés spontanés ou des portraits posés, notre équipe s'adapte à vos
   besoins pour créer un album qui reflète véritablement l'atmosphère unique de votre événement.
  <br/><br/>
  Réservez dès maintenant  votre prestation de photographe d'événements et offrez-vous la tranquillité d'esprit en sachant
  que chaque instant inoubliable sera préservé de manière artistique et significative. Parce que la vie est faite de moments
  précieux, et nous sommes là pour les capturer, les chérir et les rendre intemporels

  `,
  stepData: {
    title: "Le dérouler d'une seance",
    stepList: [
      {
        description: "One discute de ton projet, defini la date et le lieu",
        image: dotBleu
      },
      { description: "Shooting", image: dotRose },
      { description: "Tu choisi le nombre de photo", image: dotRouge },
    ],
  },
  pricing: {
    title: "Tarif",
    pricingData: [],
  },
};
