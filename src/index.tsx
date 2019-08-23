import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import { MemoryRouter } from 'react-router';
import once from 'lodash/once';
import { themeActive } from './themes/light';
import { ThemeProvider } from 'styled-components';

const deviceReady = once(() => {
    if ((window as any).isReady) {
        return;
    }

    (window as any).isReady = true;
    console.log('✨✨✨ Device ready ✨✨✨');

    window.addEventListener('offline', function() {
        console.log('offline');
    });

    window.addEventListener('online', function() {
        console.log('online');
    });

    render(App);
});

if ((window as any).cordova) {
    document.addEventListener('deviceready', deviceReady);
} else {
    deviceReady();
}

serviceWorker.unregister();

function render(Component: any) {
    ReactDOM.render(
        <ThemeProvider theme={themeActive}>
            <MemoryRouter>
                <Component />
            </MemoryRouter>
        </ThemeProvider>,
        document.getElementById('root'),
    );
}
