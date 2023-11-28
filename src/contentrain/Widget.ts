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

export interface IMansonery {
    ID: string;
    createdAt: number;
    updatedAt? : number
    images : IMansoneryObj[]
}
export interface IMansoneryObj {
    ID: string;
    createdAt: number;
    updatedAt? : number
    image:  string;
    ordre : number
}