import { createStore } from './store';

export interface User {
    id: string;
    name: string;
}

export const stores = {
    user: createStore<User>({
        id: 'K.I.T.T.2000',
        name: 'Michael Knight',
    }),
};
