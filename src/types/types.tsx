export interface IAddress {
    street: string;
    city: string;
}

export interface IUser {
    name: string;
    id: number;
    address: IAddress;
}

export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}