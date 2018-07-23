import styled from 'styled-components';
import {getContrastColorByBackground} from "../../modules/helpers";

const Card = styled.div`
    border-radius: 10px;
    background-color: #ffffff;
    border: solid 1px #e7e7e7;
    box-shadow: 15px 0px 20px 0px rgba(0, 0, 0, 0.15);
    width: ${(props) => props.width || '100%'};
    max-width: 438px;
    text-align: center;
`;

Card.Header = styled.div`
    padding: 36px;

    @media (max-width: 820px) {
        padding: 24px 20px 0;
        border: 0;
    }
`;

Card.Body = styled.div`
    min-height: 500px;
    box-sizing: border-box;
    padding: 30px;
`;

Card.Footer = styled.div`
    padding: 30px;
    vertical-align: middle;
`;

Card.Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => getContrastColorByBackground(props.color)};
    text-align: left;
    margin: 0 0 16px 0;

    @media (max-width: 820px) {
        font-size: 16px;
        font-weight: bold;
        text-align: left;
    }
`;

Card.Desc = styled.p`
    margin: 0;
    color: ${(props) => getContrastColorByBackground(props.color)};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.31;
    text-align: left;

    @media (max-width: 820px) {
        font-size: 13px;
        line-height: 1.15;
        text-align: left;
        padding: 0;
    }
`;

export default Card;
