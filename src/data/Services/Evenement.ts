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
  description: "Une evenement à immortaliser, un mariage, une bapthème...",
  stepData: {
    title: "Le dérouler d'une seance",
    stepList: [
      {
        description: "One discute de ton projet, defini la date et le lieu",
        image : dotBleu
      },
      { description: "Shooting", image : dotRose},
      { description: "Tu choisi le nombre de photo", image : dotRouge },
    ],
  },
  pricing: {
    title: "Tarif",
    pricingData: [],
  },
};
