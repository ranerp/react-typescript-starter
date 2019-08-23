import styled from 'styled-components';
import { stores } from '../store/stores';
import { useStore } from '../store/store';
import * as React from 'react';

const Wrapper = styled.div`
    text-align: center;
`;

export function UserInfoView() {
  const [user] = useStore(stores.user);

    return(
      <Wrapper>
          <p>{user.name}</p>
      </Wrapper>
  )
}