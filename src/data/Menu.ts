import { PrestationData, mesPrestationPhoto } from "./Service";

export interface Menu {
  name: string;
  path?: string | undefined;
  external?: string | undefined;
  children?: Menu[] | undefined;
}

export const menuList: Menu[] = [
  {
    name: "Services",
    path: "/services",
    children: [
      {
        name: "Photographie",
		path: "/services",
        children: mesPrestationPhoto.map((p: PrestationData) => {
          return { name: p.title };
        }),
      },
      { name: "Graphisme", path : "/" },
    ],
  },
  { name: "Portfolio", path: "/portfolio" },
  {
    name: "Boutique",
    external: "https://www.etsy.com/fr/shop/ManonBerthoStudio",
  },
  { name: "Contact", path: "/contact" },
];
