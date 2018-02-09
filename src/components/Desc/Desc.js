import React from 'react';
import styled from 'styled-components';

const StyledDesc = styled.p`
    padding: 0 18px 0;
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.31;
    text-align: center;
`;

function Desc(props) {
    return <StyledDesc {...props} />;
}

export default Desc;
