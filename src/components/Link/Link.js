import styled from 'styled-components';
import {getContrastColorByBackground} from "../../modules/helpers";

const Link = styled.a`
    text-decoration: none;
    color: ${(props) => getContrastColorByBackground(props.theme.primaryColor) || '#0629a3'};
    ${(props) => props.theme.primaryColor ? 'text-decoration: underline;': ''}
`;

export default Link;
