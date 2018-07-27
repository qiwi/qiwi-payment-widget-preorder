import React from 'react';
import styled from 'styled-components';

import Link from '../Link';

const Container = styled.div`
    font-size: 13px;
    font-weight: 300;
    color: #4a4a4a;
    bottom: 36px;
    left: 0;
    right: 0;
    position: absolute;
    
    @media (max-width: 820px){
        position: relative;
        bottom: 0;
        margin-bottom: 20px;
    }
`;

function Oferta({link}) {
    return (
        <Container>
            Совершая оплату, вы соглашаетесь с{' '}
            <Link href={link} target="_blank">
                офертой
            </Link>
        </Container>
    );
}

export default Oferta;
