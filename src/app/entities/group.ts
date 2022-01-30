export interface Groupe {
    id?: number,
    groupe_name: string;
    users: Array<User>;
}

export interface User {
    user_name: string;
    access_level?: number;
    //groups: Array<Groupe>;
}

export interface GroupeServiceError {
    errorMessage?: string;
    errorId?: string;
}
