import React from 'react';
import styled from 'styled-components';

import methodsPic from './assets/methods.svg';

const StyledMethodPayments = styled.div`
    font-size: 16px;
    font-weight: 300;
    line-height: 1.31;
    text-align: center;
    color: #000000;
    margin-top: 32px;

    & img {
        margin-top: 12px;
    }
`;

function MethodPayments({ ...props }) {
    return (
        <StyledMethodPayments {...props}>
            {props.children}
            <div>
                <img src={methodsPic} height={props.height} alt="pic" />
            </div>
        </StyledMethodPayments>
    );
}

export default MethodPayments;
