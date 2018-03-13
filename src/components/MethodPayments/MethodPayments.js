import React from 'react';
import styled from 'styled-components';

import masterCard from './assets/master-card.svg';
import mir from './assets/mir.svg';
import qiwi from './assets/qiwi.svg';
import visa from './assets/visa.svg';

const StyledMethodPayments = styled.div`
    font-size: 16px;
    font-weight: 300;
    line-height: 1.31;
    text-align: center;
    color: #000000;
    margin-top: 32px;

    @media (max-width: 450px) {
        font-size: 13px;
    }

    & img {
        margin-top: 12px;
    }
`;

const PicContainer = styled.div`
    width: 204px;
    text-align: center;
    margin: 0 auto;

    @media (max-width: 450px) {
        width: 100%;
    }
`;

const Pic = styled.img`
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;

    &:last-child {
        margin-right: 0;
    }
`;

function MethodPayments({ ...props }) {
    const methods = [
        {
            pic: visa,
            width: 35,
            height: 12
        },
        {
            pic: masterCard,
            width: 24,
            height: 16
        },
        {
            pic: mir,
            width: 30,
            height: 11
        },
        {
            pic: qiwi,
            width: 45,
            height: 17
        }
    ];

    return (
        <StyledMethodPayments {...props}>
            {props.children}
            <PicContainer>
                {methods.map((method, index) => (
                    <Pic
                        key={index}
                        src={method.pic}
                        height={method.height}
                        width={method.width}
                        alt="method pic"
                    />
                ))}
            </PicContainer>
        </StyledMethodPayments>
    );
}

export default MethodPayments;
