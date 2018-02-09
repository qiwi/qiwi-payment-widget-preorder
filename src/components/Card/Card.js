import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    border-radius: 10px;
    background-color: #ffffff;
    border: solid 1px #e7e7e7;
    width: ${(props) => props.width || 200}px;
`;

function Card(props) {
    return <StyledCard {...props}/>;
}

export default Card;
