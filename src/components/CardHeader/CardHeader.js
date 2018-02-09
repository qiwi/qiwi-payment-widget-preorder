import React from 'react';
import styled from 'styled-components';

const StyledCardHeader = styled.div`
    padding: 30px;
    border-bottom: 1px solid #e7e7e7;
`;

function CardHeader(props) {
    return <StyledCardHeader {...props} />;
}

export default CardHeader;
