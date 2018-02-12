import styled from 'styled-components';

const Card = styled.div`
    border-radius: 10px;
    background-color: #ffffff;
    border: solid 1px #e7e7e7;
    width: ${(props) => props.width || 200}px;
    text-align: center;
`;

Card.Header = styled.div`
    padding: 30px;
    border-bottom: 1px solid #e7e7e7;
`;

Card.Body = styled.div`
    min-height: 500px;
    box-sizing: border-box;
    padding: 30px;
`;

Card.Footer = styled.div`
    padding: 30px;
    vertical-align: middle;

    & a {
        font-size: 14px;
        font-weight: 500;
        color: #717171;
        text-decoration: none;
        margin-left: 20px;
    }
`;

Card.Title = styled.h1`
    font-size: 24px;
    font-weight: 900;
    text-align: center;
    margin: 0 0 16px 0;
`;

Card.Desc = styled.p`
    padding: 0 18px 0;
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.31;
    text-align: center;
`;

export default Card;
