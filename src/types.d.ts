
export interface IShow {
    id: number;
    name: string;
    url: string;
}

export interface IShowState {
    query: string;
    results: IShow[];
}