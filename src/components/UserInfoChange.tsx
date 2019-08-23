import styled from 'styled-components';
import { useStore } from '../store/store';
import { stores } from '../store/stores';
import * as React from 'react';

const Wrapper = styled.div`
    text-align: center;
`;

export function UserInfoChange() {
    const [user, setUser] = useStore(stores.user);

    return (
        <Wrapper>
            <input data-test="input-phone" value={user.name} onChange={ event => setUser({...user, name: event.target.value})} />
        </Wrapper>
    );
}
