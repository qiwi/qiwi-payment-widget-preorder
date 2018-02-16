import React, { Component } from 'react';

import Button from '../../components/Button';
import Field from '../../components/Field';
import styled from 'styled-components';

const FieldWrapper = styled.div`
    width: 170px;
    position: relative;
    margin: 0 auto 32px;

    @media (max-width: 450px) {
        width: 100%;
    }
`;

const FormButton = styled(Button)`
    @media (max-width: 450px) {
        width: 100%;
    }
`;

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            message: ''
        };
    }

    errorMessage(value) {
        let message = '';

        if (!/^[0-9]{1,6}([,.][0-9]{1,2})?$/.test(value)) {
            message = 'Некорректная сумма';
        }
        if (!value) {
            message = 'Введите сумму';
        }
        if (parseFloat(value) < 1) {
            message = 'Минимальная сумма 1 ₽';
        }
        if (parseFloat(value) > 500000) {
            message = 'Максимальная сумма 500 000 ₽';
        }

        return message;
    }

    formattingAmount = (amount) => {
        let number = amount.replace(/[^0-9,.]/g, '').substring(0, 9);

        return number ? parseFloat(number, 10) : number;
    };

    errorHandler = (e) => {
        let message = '';

        message = this.errorMessage(e.target.value);

        this.setState({
            message
        });
    };

    onInput = (e) => {
        const value = this.formattingAmount(e.target.value);

        this.setState({
            value
        });
    };

    render() {
        return (
            <div>
                <FieldWrapper>
                    <Field
                        onInput={this.onInput}
                        onChange={this.errorHandler}
                        value={this.state.value}
                        error={this.state.message}
                    />
                </FieldWrapper>
                <div>
                    <FormButton
                        width="159px"
                        color="#ff8c00"
                        disabled={!this.state.value}
                        onClick={() => {
                            this.props.redirect(this.state.value);
                        }}>
                        Продолжить
                    </FormButton>
                </div>
            </div>
        );
    }
}

export default Form;
