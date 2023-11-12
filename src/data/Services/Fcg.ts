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
  description: "Envie d'une séance à deux, à troix, ou d'immortaliser une grossesse ? Cette formule est la pour toi",
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
        priceList: ["5 photos - 80€", "10 photos - 120€", "20 photos - 150€"],
        subtitle:
          "Ces tarifs comprennent les frais de déplacement en ile et vilaine, la prise de vie et le post traitement",
      },
    ],
  },
};
