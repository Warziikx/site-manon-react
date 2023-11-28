import _prestationList from "@/data/contentrain/Services/fr.json";

// export interface PrestationPrincingData {
//     title: string;
//     priceList: string[];
//     subtitle: string;
// }

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
    // stepData: {
    //     title: string;
    //     stepList: NumberFeature[];
    // };
    // pricing: {
    //     title: string;
    //     pricingData: PrestationPrincingData[];
    // };
}

export const prestationList = _prestationList as IPrestation[];

export const getByGroup = (group: string) => {
    return prestationList.filter((p: IPrestation) => p.type === group);
};
