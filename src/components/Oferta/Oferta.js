import React from 'react';
import styled from 'styled-components';

import Link from '../Link';

const Container = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: rgb(113, 113, 113);
    margin-bottom: 18px;
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
