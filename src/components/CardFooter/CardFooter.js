import React from 'react';
import styled from 'styled-components';

const StyledCardFooter = styled.div`
    padding: 30px;
    border-bottom: 1px solid #e7e7e7;
`;

function CardFooter(props) {
    return <StyledCardFooter {...props} />;
}

export default CardFooter;
