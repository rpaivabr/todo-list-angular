export interface Todo {
    id: number;
    title: string;
    done: boolean;
}

export interface TodoPostRequest {
    title: string;
    done: boolean;
}
