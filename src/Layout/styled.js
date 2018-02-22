import styled, { keyframes } from 'styled-components';
import Card from '../components/Card';

const show = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

export const PreorderCard = styled(Card)`
    margin: 2% auto;
    animation: ${show} 1s linear forwards;
    opacity: 0;

    @media (max-width: 450px) {
        margin: 0 auto;
        width: 100%;
        border: 0;
        border-radius: 0;
    }
`;

export const PreorderCardBody = styled(Card.Body)`
    @media (max-width: 450px) {
        min-height: 270px;
        box-sizing: border-box;
        padding: 20px;
    }
`;

export const PreorderCardFooter = styled(Card.Footer)`
    position: relative;
    text-align: center;

    @media (max-width: 450px) {
        background-color: rgb(247, 247, 247);
        padding: 20px;
    }
`;

export const HelpLink = styled.a`
    margin-left: 20px;
    font-size: 14px;
    font-weight: 500;
    color: #717171;
    text-decoration: none;

    @media (max-width: 450px) {
        display: block;
        right: 0;
        top: 0;
        left: 0;
        position: relative;
        margin: 20px auto 0;
    }
`;
