import React from 'react';
import styled from 'styled-components';

import mc from './assets/mc-securecode.svg';
import mir from './assets/mir.svg';
import pci from './assets/pci.svg';
import qiwi from './assets/qiwi-kassa-rgb.svg';
import visa from './assets/v-visa.svg';

const StyledTechnologiesPics = styled.span`
    & img {
        margin: 5px 8px 0 0;
        vertical-align: middle;
    }
`;

const pics = [qiwi, pci, visa, mc, mir];

function TechnologiesPics({ ...props }) {
    return (
        <StyledTechnologiesPics {...props}>
            {pics.map((pic, index) => <img key={index} src={pic} height={props.height} alt="pic" />)}{' '}
        </StyledTechnologiesPics>
    );
}

export default TechnologiesPics;
