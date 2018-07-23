import styled, { keyframes } from 'styled-components';
import Card from '../components/Card';
import {editColor} from "../modules/helpers";

const show = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

export const CardHolder = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 820px;
    max-height: 560px;
`;

export const MerchantInfoCard = styled(Card)`
    animation: ${show} 1s linear forwards;
    z-index: -1;
    border-radius: 0;
    opacity: 0;    
    max-width: 382px;
    background:
        url(${(props) => props.url || ''}), 
        linear-gradient(56deg, ${(props) => editColor(props.color, -50)}, ${(props) => editColor(props.color,  30)});
    
    @media (max-width: 820px) {
        display: none;
    }
`;

export const ContentBlock = styled.div`
    margin: 2% auto;
    animation: ${show} 1s linear forwards;
    opacity: 0;
    max-width: 820px;

    @media (max-width: 820px) {
        margin: 0 auto;
        width: 100%;
        border: 0;
        border-radius: 0;
    }
`;

export const PreorderCardBody = styled(Card.Body)`
    position: relative;

    @media (max-width: 820px) {
        min-height: 270px;
        box-sizing: border-box;
        padding: 20px;
    }
`;

export const PreorderCardFooter = styled(Card.Footer)`
    position: relative;
    text-align: center;

    @media (max-width: 820px) {
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

    @media (max-width: 820px) {
        display: block;
        right: 0;
        top: 0;
        left: 0;
        position: relative;
        margin: 20px auto 0;
    }
`;
