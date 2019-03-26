import styled from 'styled-components';
import {getContrastColorByBackground, media} from "../../modules/helpers";
import {commonColors} from '../../styles/index'

function setBorder(buttonBackgroundColor) {
    if(buttonBackgroundColor !== '#FFF' && buttonBackgroundColor !== '#FFFFFF' && buttonBackgroundColor !== '#fff' && buttonBackgroundColor !== '#ffffff' && buttonBackgroundColor !== 'transparent'){
        return 'none'
    }
    return 'solid 1px rgba(0, 0, 0, 0.14)'
}

const Button = styled.button`
    background-color: ${(props) => props.theme.primaryColor || 'transparent'};
    width: ${(props) => props.width || '100%'};
    height: 48px;
    border-radius: 100px;
    line-height: 20px;
    font-size: 14px;
    font-family: MuseoSansCyrl;
    font-weight: 500;
    text-align: center;
    color: ${(props) => props.theme.primaryColor ? getContrastColorByBackground(props.theme.primaryColor): commonColors.BLACK};
    border: 0;
    padding: 0;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    border: ${setBorder(((props) => props.theme.primaryColor || 'transparent'))};
        
    @media ${media.mobile}{
        border: solid 1px rgba(0, 0, 0, 0.14);
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        opacity: 0.7;
    }
`;

export default Button;
