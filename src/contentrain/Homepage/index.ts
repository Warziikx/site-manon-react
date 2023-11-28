import { INumberFeatures } from "@/contentrain/Widget";
import _homepage from "@/contentrain/Homepage/Homepage.json";

export interface IPresentation {
    ID: string;
    createdAt: number;
    surtitle: string;
    title: string;
    description: string;
    image: string;
}

export interface IPrestation {
    ID: string;
    createdAt: number;
    title: string;
    list: IPrestationObj[];
}

export interface IPrestationObj {
    ID: string;
    createdAt: number;
    title: string;
    image: string;
    list: string[];
}
export interface ITestimonial {
    ID: string;
    createdAt: number;
    author: string;
    description: string;
    image: string;
    ordre: number;
}

export interface HomepageData {
    ID: string;
    createdAt: number;
    presentation: IPresentation;
    prestation: IPrestation;
    why_me: INumberFeatures;
    testimonial: ITestimonial[];
}

export const homepage = _homepage[0] as HomepageData;
