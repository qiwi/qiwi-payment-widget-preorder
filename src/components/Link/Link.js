import styled from 'styled-components';
import {getContrastColorByBackground, media} from "../../modules/helpers";

const Link = styled.a`
    text-decoration: none;
    color: ${(props) => getContrastColorByBackground(props.theme.secondaryColor) || '#0629a3'};
    ${(props) => props.theme.secondaryColor ? 'text-decoration: underline;': ''}
    
    @media ${media.mobile} {
        color: #0629a3;
    }
`;

export default Link;
