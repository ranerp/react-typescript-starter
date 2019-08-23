import classNames from 'classnames';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const App: React.FC = () => {
    return (
        <Wrapper className={classNames('App', {})}>
        </Wrapper>
    );
};

export default App;
