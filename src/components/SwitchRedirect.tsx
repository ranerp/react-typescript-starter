import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { AppRoute } from '../shared/router';

export function SwitchRedirect( input: { routes: AppRoute[]} ) {
    return (
        <Switch>

            {input.routes.map(route => (
                <Route key={route.path} {...route} />
            ))}

            <Redirect to={input.routes[0].path} />
        </Switch>
    );
}
