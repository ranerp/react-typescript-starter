import each from 'lodash/each';

export interface Route {
    path: string;
    component: any;
}

export interface Routes {
    [route: string]: Route;
}

export const routes: Routes = {
    'seedlings': {
        path: '/seedlings',
        component: null,
    },
};

export function withParams(route: Route, params: string[]) {
    each(params, (value, key) => (route.path = route.path.replace(`:${key}`, value)));
    return route;
}
