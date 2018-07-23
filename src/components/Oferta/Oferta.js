import React from 'react';
import styled from 'styled-components';

import Link from '../Link';

const Container = styled.div`
    font-size: 13px;
    font-weight: 300;
    color: #4a4a4a;
    margin-bottom: 18px;
    bottom: 24px;
    position: absolute;
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
