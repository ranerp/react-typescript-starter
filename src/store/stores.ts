import { createStore } from './store';

export interface User {
    id: string;
    name: string;
}

export const stores = {
    user: createStore<User>({
        id: 'asd',
        name: 'qwerty',
    }),
};
