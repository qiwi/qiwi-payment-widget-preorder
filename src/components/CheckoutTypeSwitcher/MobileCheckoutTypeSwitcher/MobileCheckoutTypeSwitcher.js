import React from 'react'
import styled from 'styled-components'
import arrowIconSvg from '../assets/arrow-down.svg';


const Select = styled.select`
    appearance: none;
    border: none;
    background: transparent;
    box-shadow: inset 0 -1px 0 #cccccc;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 0;
    outline: none;
    border-radius: 0;

    &:focus {
        box-shadow: inset 0 -2px 0 ${props => props.theme.primaryColor || '#ff8c00'};
    }

    background: url("${arrowIconSvg}") no-repeat;
    background-position-x: 100%;
    background-position-y: 50%;

`;

const StyledMobileCheckoutTypeSwitcher = styled.div`
    margin: 0 auto 24px auto;
    padding: 0 20px;
`;

class SourceModeSelect extends React.PureComponent {
    getActiveSourceMode = () => {
        return this.props.types.find(type => type.typeName === this.props.currentType).typeName
    };

    renderOptions = () =>
        this.props.types.map(type => (
            <option value={type.typeName} key={type.typeName}>
                {type.label}
            </option>
        ));


    render() {
        return (
            <Select
                onChange={e => this.props.onTypeChange(e.target.value)}
                value={this.getActiveSourceMode()}
            >
                {this.renderOptions()}
            </Select>
        );
    }
}

function MobileCheckoutTypeSwitcher({onTypeChange, types, currentType}) {
    return (<StyledMobileCheckoutTypeSwitcher>
        <SourceModeSelect onTypeChange={onTypeChange} types={types}
                          currentType={currentType}/>
    </StyledMobileCheckoutTypeSwitcher>)
}

export default MobileCheckoutTypeSwitcher;
