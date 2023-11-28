export interface INumberFeatures {
    ID: string;
    createdAt: number;
    title: string;
    list: INumberFeature[];
}

export interface INumberFeature {
    ID: string;
    createdAt: number;
    description: string;
    image: string;
    ordre: number;
}