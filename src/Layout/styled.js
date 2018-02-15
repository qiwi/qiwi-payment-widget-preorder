import styled from 'styled-components';
import Card from '../components/Card';
import Loader from "../components/Loader";

export const PreorderCard = styled(Card)`
    margin: 0 auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;

    @media (max-width: 450px) {
        top: 0;
        transform: translateY(0);
        width: 100%;
        border: 0;
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
        margin: 10px auto 0;
    }
`;
