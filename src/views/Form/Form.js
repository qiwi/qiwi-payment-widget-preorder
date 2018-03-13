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
            errorMessage: ''
        };
    }

    errorMessage(value) {
        let errorMessage = '';

        if (!/^[0-9]{1,6}([,.][0-9]{1,2})?$/.test(value)) {
            errorMessage = 'Некорректная сумма';
        }
        /* if (!value) {
            errorMessage = 'Введите сумму';
        } */
        if (parseFloat(value) < 1) {
            errorMessage = 'Минимальная сумма 1 ₽';
        }
        if (parseFloat(value) > 500000) {
            errorMessage = 'Максимальная сумма 500 000 ₽';
        }
        if (errorMessage) {
            window.dataLayer.push({
                event: 'validation.error',
                eventAction: errorMessage
            });
        }

        return errorMessage;
    }

    formattingAmount = (amount) => {
        let number = amount.replace(/[^0-9,.]/g, '').substring(0, 7);

        return number ? parseFloat(number, 10) : number;
    };

    errorHandler = (e) => {
        let errorMessage = '';

        const value = this.formattingAmount(e.target.value);

        errorMessage = this.errorMessage(value);

        this.setState({
            errorMessage,
            value
        });
    };

    onInput = (e) => {
        const value = this.formattingAmount(e.target.value);

        this.setState({
            value
        });
    };

    render() {
        const { value, errorMessage } = this.state;

        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    this.props.redirect(value, true);
                }}>
                <FieldWrapper>
                    <Field
                        type="tel"
                        onChange={this.errorHandler}
                        value={value}
                        error={errorMessage}
                    />
                </FieldWrapper>
                <div>
                    <FormButton
                        width="159px"
                        color="#ff8c00"
                        disabled={!value || errorMessage}
                        type="submit">
                        Продолжить
                    </FormButton>
                </div>
            </form>
        );
    }
}

export default Form;
