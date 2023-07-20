
export interface IShow {
    id: number;
    name: string;
    url: string;
}

export interface IShowState {
    query: string;
    results: IShow[];
    loading:boolean;
    error:boolean
}

export interface IInformation {
    name:string;
    language: string;
    status: string;
    summary: string;
    img: string;
    runtime: number
}

export interface IShowInfo {
    results: IInformation;
    loading: boolean;
    error: boolean
}