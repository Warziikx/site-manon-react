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
      "Tu souhaites reprendre confiance en toi ou juste te faire plaisir avec un shooting photos. C'est possible",
    image: dotBleu,
  },
  {
    description:
      "Tu as une heureuse nouvelle à annoncer (Mariage, naissance, ...) ? Je peux m'occuper de la séance photos et de la conception des faires parts",
    image: dotRose,
  },
  {
    description:
      "Tu as un professionnelle et tu souhaites revoir l'identitée de ta marque ? Je peux travailler sur ta nouvelle identité graphique et la création de tes contenus print et digitaux",
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
