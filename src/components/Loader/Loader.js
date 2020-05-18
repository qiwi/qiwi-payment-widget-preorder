import React from 'react';

import warningPic from './assets/warning.svg';
import circlePin from './assets/circle.svg';

import styled, { keyframes } from 'styled-components';

const StyledLoader = styled.div`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #000000;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
`;

const LoaderPic = styled.img`
    width: 64px;
    height: 64px;
    margin: 16px auto;
    display: block;
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled(LoaderPic)`
    animation: ${spin} 1s linear infinite;
`;

const Loader = ({ error }) => (
    <StyledLoader>
        {error ? (
            <div>
                <LoaderPic src={warningPic} /> Вы перешли по неправильной ссылке
            </div>
        ) : (
            <div>
                <Spinner src={circlePin} /> Загрузка
            </div>
        )}
    </StyledLoader>
);

export default Loader;
