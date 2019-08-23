import classNames from 'classnames';
import React from 'react';
import styled from 'styled-components';
import { useOnce } from '../use/once';
import { SwitchRedirect } from '../components/SwitchRedirect';
import { routes } from '../shared/router';
import { withRouter } from 'react-router';

const Wrapper = styled.div`
    height: 100%;
`;

function App() {
    useOnce(bootstrap);

    async function bootstrap() {
        try {
            // TODO: Load things necessary to start the application.
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Wrapper className={classNames('App', {})}>
            <SwitchRedirect routes={routes} />
        </Wrapper>
    );
}

export default withRouter(App);
