import _projet from "@/contentrain/Projet/Projet.json";
import { IMansonery } from "../Widget";

export interface IProjetImg {
	ID: string;
	createdAt: number;
	updatedAt?: number;
	img: string;
	order: number;
}

export interface IProjet {
	ID: string;
	createdAt: number;
	updatedAt?: number;
	libelle: string;
	slug: string;
	type: string;
	brief: {
		ID: string;
		createdAt: number;
		updatedAt?: number;
		title: string;
		content: string;
	};
	imageList: IProjetImg[];
	detail: string;
	other: {
		ID: string;
		createdAt: number;
		updatedAt?: number;
		title: string;
		description: string;
		imageList: IProjetImg[];
	};
	mansonery?: IMansonery[];
}

/* ---- On cast les contenu ---- */
export const projetList = _projet as IProjet[];

export const getBySlug = (slug: string) => {
	return projetList.find((p: IProjet) => p.slug === slug);
};

export const getById = (ID: string) => {
	return projetList.find((p: IProjet) => p.ID === ID);
};
