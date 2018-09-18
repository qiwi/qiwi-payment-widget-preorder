import styled from 'styled-components';
import {getContrastColorByBackground} from "../../modules/helpers";
import {color} from '../../styles/index'

const Button = styled.button`
    background-color: ${(props) => props.color || 'transparent'};
    width: ${(props) => props.width || '100%'};
    height: 48px;
    border-radius: 100px;
    line-height: 20px;
    font-size: 14px;
    font-family: MuseoSansCyrl;
    font-weight: 500;
    text-align: center;
    color: ${(props) => props.color ? getContrastColorByBackground(props.color): color.BLACK};
    border: 0;
    padding: 0;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    border: solid 1px rgba(0, 0, 0, 0.14);
        
    @media (max-width: 820px){
        background-color: transparent;
        border: solid 1px rgba(0, 0, 0, 0.14);
        color: #000000;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        opacity: 0.7;
    }
`;

export default Button;
