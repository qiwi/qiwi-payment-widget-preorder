import styled from 'styled-components';

const Button = styled.button`
    background-color: ${(props) => props.color || 'transparent'};
    width: ${(props) => props.width || '100%'};
    height: 47px;
    border-radius: 100px;
    line-height: 47px;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: ${(props) => (props.color ? '#ffffff' : '#000')};
    border: 0;
    padding: 0;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    border: solid 1px
        ${(props) => (props.color ? props.color : 'rgba(0, 0, 0, 0.14)')};

    &:focus {
        outline: none;
    }
`;

export default Button;
