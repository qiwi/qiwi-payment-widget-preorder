import React, { Component } from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    &::before,
    &::after {
        content: '';
        height: 1px;
        width: 0;
        bottom: 0;
        position: absolute;
        background: ${(props) => (props.error ? '#ff8191' : props.theme.primaryColor || '#ff8c00')};
        transition: 0.2s ease all;
    }
    &::before {
        left: 50%;
    }
    &::after {
        right: 50%;
    }
`;

const StyledField = styled.div`
    position: relative;
    width: 100%;
    height: 50px;

    & label {
        position: absolute;
        display: block;
        font-size: 20px;
        font-weight: 300;
        font-family: MuseoSansCyrl;
        text-align: left;
        color: #717171;
        left: 4px;
        bottom: 3px;
        transition: 0.2s ease all;
    }

    & input {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: 20px;
        font-weight: 300;
        font-family: MuseoSansCyrl;
        text-align: left;
        padding: 0 16px 0 0;
        margin: 0;
        -moz-appearance: textfield;
        -webkit-appearance: none;
        box-sizing: border-box;
        border: 0;
        border-bottom: 1px solid
            ${(props) => (props.error ? '#ff8191' : '#d8d8d8')};
        box-shadow: none;
        background-color: transparent;
    }

    & input::-webkit-outer-spin-button,
    & input::-webkit-inner-spin-button {
        display: none;
        margin: 0;
        -webkit-appearance: none;
    }

    & input:focus {
        outline: none;
    }

    & input:focus ~ label,
    & input:valid ~ label {
        -webkit-transform: scale(0.65, 0.65) translate(-24px, -32px);
        -moz-transform: scale(0.65, 0.65) translate(-24px, -32px);
        -ms-transform: scale(0.65, 0.65) translate(-24px, -32px);
        -o-transform: scale(0.65, 0.65) translate(-24px, -32px);
        transform: scale(0.65, 0.65) translate(-24px, -32px);
        opacity: 0.7;
        color: #000000;
    }

    & input:focus ~ ${Bar}::before, & input:focus ~ ${Bar}::after {
        width: 50%;
    }
`;

const Currency = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 24px;
    opacity: 0.6;
    font-size: 20px;
    font-weight: 300;
    text-align: left;
    color: #000000;
`;

const Message = styled.div`
    opacity: ${(props) => (props.error ? '1' : '0')};
    color: #d0021b;
    position: absolute;
    left: 0;
    bottom: -14px;
    height: 13px;
    font-size: 11px;
    font-weight: 300;
    text-align: left;
`;

class Field extends Component {
    state = {
        focused: false
    };
    _onFocus = () => {
        if (this.props.onFocus) {
            this.props.onFocus();
        }
    };

    _onBlur = () => {
        if (this.props.onBlur) {
            this.props.onBlur();
        }
    };

    render() {
        return (
            <StyledField width={this.props.width}>
                <input
                    type={this.props.type}
                    id="donation-amount"
                    required
                    autoFocus={true}
                    onChange={this.props.onChange}
                    onBlur={this._onBlur}
                    onFocus={this._onFocus}
                    value={this.props.value}
                    onInput={this.props.onInput}
                />
                <label htmlFor="donation-amount">Cумма</label>
                <Currency>
                    &#x20bd;
                </Currency>
                <Bar />
                <Message error={this.props.error}>{this.props.error}</Message>
            </StyledField>
        ); /*&#x20bd; - ruble sign*/
    }
}

export default Field;
