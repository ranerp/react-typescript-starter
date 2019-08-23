import styled from 'styled-components';
import * as React from 'react';
import { UserInfoChange } from './UserInfoChange';
import { UserInfoView } from './UserInfoView';

const Wrapper = styled.div`
    text-align: center;
    background-color: ${props => props.theme.colors.background};
`;

const WhiteHeader = styled.h1`
    color: ${props => props.theme.colors.text};
`;

export function Main() {
    return (
        <Wrapper>
            <WhiteHeader>Grow</WhiteHeader>
            <UserInfoChange/>
            <UserInfoView/>
        </Wrapper>
    );
}
