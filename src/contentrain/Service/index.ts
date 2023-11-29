import { IMansonery, INumberFeatures } from "@/contentrain/Widget";
import _prestationList from "@/contentrain/Service/Service.json";

// export interface PrestationPrincingData {
//     title: string;
//     priceList: string[];
//     subtitle: string;
// }

export interface IPricing {
  ID: string;
  createdAt: number;
  updatedAt?: number;
  title: string;
  list: IPricingObj[];
}
export interface IPricingObj {
  ID: string;
  createdAt: number;
  updatedAt?: number;
  title: string;
  subtitle: string;
  list: string[];
}

export interface IPrestation {
  ID: string;
  createdAt: number;
  type: string;
  display: "left" | "right";
  slug: string;
  image: string;
  title: string;
  surtitle: string;
  description: string;
  ordre: number;
  step?: INumberFeatures;
  pricing?: IPricing;
  mansonery?: IMansonery[];
  // pricing: {
  //     title: string;
  //     pricingData: PrestationPrincingData[];
  // };
}

export const prestationList = _prestationList as IPrestation[];

export const getByGroup = (group: string) => {
  return prestationList.filter((p: IPrestation) => p.type === group);
};

export const getBySlug = (slug: string) => {
  return prestationList.find((p: IPrestation) => p.slug === slug);
};

export const getById = (ID : string) => {
  return prestationList.find((p: IPrestation) => p.ID === ID);
}
