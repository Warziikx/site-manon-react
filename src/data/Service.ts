import projetPerso from "@/assets/images/homepage/service/photograhie/projet-perso.jpg";
import maternite from "@/assets/images/homepage/service/photograhie/maternite.jpg";
import evenement from "@/assets/images/homepage/service/photograhie/evenement.jpg";
import commercial from "@/assets/images/homepage/service/photograhie/commercial.jpg";

export interface Service {
  image: string;
  title: string;
  description: string;
}

export const photoServiceList: Service[] = [
  {
    image: projetPerso,
    title: "Projet Personel",
    description:
      "Les moments spéciaux et les projets personnels sont la toile de fond de nos vies. En tant que photographe, je suis là pour capturer la beauté et l'émotion de ces instants, pour donner vie à vos projets personnels en images.",
  },
  {
    image: evenement,
    title: "Evenementielle",
    description:
      "Capturer chaque moment du plus beau jour de votre vie. Des instants fugaces aux moments inoubliables, je vous accompagnerais pour immortaliser l'amour et l'émotion de votre mariage",
  },
  {
    image: maternite,
    title: "Maternite",
    description:
      "La maternité est une période spéciale, pleine de beauté et d'émotion. Laissez-moi vous accompagner dans cette aventure visuelle et créer des souvenirs inoubliables. ",
  },
  {
    image: commercial,
    title: "Commerciale",
    description: `Que ce soit pour mettre en lumière vos produits, documenter vos événements 
    d'entreprise, ou concevoir des supports visuels sur mesure,je suis là pour répondre à
    vos besoins. Mon approche professionnelle et créative s'adapte à votre secteur
    d'activité et à vos objectifs`,
  },
];

import papeterie from "@/assets/images/homepage/service/graphisme/papeterie.jpg";
import illustration from "@/assets/images/homepage/service/graphisme/illustration.jpg";
import creationContenu from "@/assets/images/homepage/service/graphisme/creation-contenu.jpg";

export const graphismeServiceList: Service[] = [
  {
    image: papeterie,
    title: "Papeterie",
    description:
      "Bla Bla",
  },
  {
    image: illustration,
    title: "Illustration",
    description:
      "Bla Bla",
  },
  {
    image: creationContenu,
    title: "Création de contenu",
    description:
      "Bla Bla",
  },
]
