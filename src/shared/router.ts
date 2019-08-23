import each from 'lodash/each';
import { Main } from '../pages/Main';

export interface AppRoute {
    path: string;
    component: any;
}

export const routes: AppRoute[] = [
    {
        path: '/main',
        component: Main,
    },
];

export function withParams(route: AppRoute, params: string[]): AppRoute {
    each(params, (value, key) => (route.path = route.path.replace(`:${key}`, value)));
    return route;
}
