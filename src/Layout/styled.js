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
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    max-width: 820px;
    max-height: 560px;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.15);
`;

export const MerchantInfoCard = styled(Card)`
    animation: ${show} 1s linear forwards;
    z-index: -1;
    border-radius: 0 10px 10px 0px;
    opacity: 0;    
    box-shadow: none;
    max-width: 382px;
    background:
        url(${(props) => props.url || ''}), 
        linear-gradient(56deg, ${(props) => props.color ? editColor(props.color, -50): '#f9f9f9'},
         ${(props) => props.color ? editColor(props.color,  30): '#f9f9f9'});
    
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

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
