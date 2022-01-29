export interface Groupe {
    groupe_name: string;
    users: Array<User>;
}

export interface User {
    user_name: string;
    access_level: number;
    groups: Array<Groupe>;
}