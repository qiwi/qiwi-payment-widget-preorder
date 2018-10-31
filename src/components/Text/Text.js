import styled from 'styled-components'

const StyledText = styled.span`
    font-family: "MuseoSansCyrl","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: ${props => (props.size ? props.size + 'px' : '16px')};
    font-weight: ${props => (props.weight ? props.weight : '500')};
    color: #000000;
    opacity: ${props => (props.opacity ? props.opacity : '1')};
`

export default StyledText
