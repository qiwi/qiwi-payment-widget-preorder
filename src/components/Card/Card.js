import styled from 'styled-components';

const Card = styled.div`
    border-radius: 10px;
    background-color: #ffffff;
    border: solid 1px #e7e7e7;
    width: ${(props) => props.width || '100%'};
    text-align: center;
`;

Card.Header = styled.div`
    padding: 30px;
    border-bottom: 1px solid #e7e7e7;

    @media (max-width: 450px) {
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
    font-weight: 900;
    text-align: center;
    margin: 0 0 16px 0;

    @media (max-width: 450px) {
        font-size: 16px;
        font-weight: bold;
        text-align: left;
    }
`;

Card.Desc = styled.p`
    padding: 0 18px 0;
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.31;
    text-align: center;

    @media (max-width: 450px) {
        font-size: 13px;
        line-height: 1.15;
        text-align: left;
        padding: 0;
    }
`;

export default Card;
