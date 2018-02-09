import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-size: 24px;
    font-weight: 900;
    text-align: center;
    margin: 0 0 16px 0;
`;

function Title(props) {
    return <StyledTitle {...props} />;
}

export default Title;
