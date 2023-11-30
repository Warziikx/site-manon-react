import _portfolioPage from "@/contentrain/Portfoliopage/Portfoliopage.json";
import { IProjet, getById } from "@/contentrain/Projet";

export interface IPortfolioPage {
    ID: string;
    createdAt: number;
    updatedAt?: number;
    title: string;
    subtitle: string;
    description: string;
    projetList: string[];
    projetListObj?: IProjet[];
}

const isProjet = (projet: IProjet | undefined): projet is IProjet => {
    return !!projet;
};

export const buildPortfolioPage = () => {
    const portfolioPageArray = _portfolioPage as IPortfolioPage[];
    const portfolioPage = portfolioPageArray[0];
    portfolioPage.projetListObj = portfolioPage.projetList.map((p: string) => getById(p)).filter(isProjet);
    return portfolioPage;
};

export const portfolioPage = buildPortfolioPage();