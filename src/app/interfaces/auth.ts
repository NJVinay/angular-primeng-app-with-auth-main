export interface User {
    id: string;
    fullName: string;
    email: string;
    password: string
}

export interface Item {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
}
