import React from 'react';
import styled from 'styled-components';

import Link from '../Link';
import {getContrastColorByBackground, media} from "../../modules/helpers";

const Container = styled.div`
    font-size: 13px;
    font-weight: 300;
    color: ${(props) => getContrastColorByBackground(props.theme.primaryColor) || '#4a4a4a'};
    bottom: 36px;
    left: 0;
    right: 0;
    position: absolute;
    
    @media  ${media.mobile}{
        position: relative;
        bottom: 0;
        color: #4a4a4a;
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
