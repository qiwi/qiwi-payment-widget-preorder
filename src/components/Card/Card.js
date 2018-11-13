import styled from 'styled-components';
import {getContrastColorByBackground, media} from "../../modules/helpers";
import {commonColors} from '../../styles/index'

const Card = styled.div`
    height: 100%;
    border-radius: 10px 0 0 10px;
    background-color: #ffffff;
    box-shadow: 15px 0px 25px -8px rgba(0, 0, 0, 0.15);
    width: ${(props) => props.width || '100%'};
    text-align: center;
`;

Card.Header = styled.div`
    padding: 36px;

    @media ${media.mobile} {
        padding: 24px 20px 5px;
        border: 0;
    }
`;

Card.Body = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px;
`;

Card.Footer = styled.div`
    padding: 30px;
    vertical-align: middle;
`;

Card.Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => props.theme.secondaryColor ? getContrastColorByBackground(props.theme.secondaryColor): commonColors.BLACK};
    text-align: left;
    margin: 0;

    @media ${media.mobile} {
        margin: 0;
        color: #000;
        font-size: 16px;
        font-weight: bold;
        text-align: left;
    }
`;

Card.Desc = styled.p`
    margin: 0;
    color: ${(props) => props.theme.secondaryColor ? getContrastColorByBackground(props.theme.secondaryColor): commonColors.BLACK};
    font-size: 16px;
    font-weight: 500;
    margin: 16px 0 0 0;
    line-height: 1.31;
    text-align: left;

    @media ${media.mobile} {
        color: #000;
        font-size: 13px;
        line-height: 1.15;
        text-align: left;
        padding: 0;
    }
`;

export default Card;
