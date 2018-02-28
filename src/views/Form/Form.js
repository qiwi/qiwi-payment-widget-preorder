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
        /* if (!value) {
            message = 'Введите сумму';
        } */
        if (parseFloat(value) < 1) {
            message = 'Минимальная сумма 1 ₽';
        }
        if (parseFloat(value) > 500000) {
            message = 'Максимальная сумма 500 000 ₽';
        }
        if (message) {
            window.dataLayer.push({
                event: 'validation.error',
                eventAction: message
            });
        }

        return message;
    }

    formattingAmount = (amount) => {
        let number = amount.replace(/[^0-9,.]/g, '').substring(0, 9);

        return number ? parseFloat(number, 10) : number;
    };

    errorHandler = (e) => {
        let message = '';

        const value = this.formattingAmount(e.target.value);

        message = this.errorMessage(value);

        this.setState({
            message,
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
        const { value, message } = this.state;

        return (
            <div>
                <FieldWrapper>
                    <Field
                        onChange={this.errorHandler}
                        value={value}
                        error={message}
                    />
                </FieldWrapper>
                <div>
                    <FormButton
                        width="159px"
                        color="#ff8c00"
                        disabled={!value}
                        onClick={() => {
                            this.props.redirect(value, true);
                        }}>
                        Продолжить
                    </FormButton>
                </div>
            </div>
        );
    }
}

export default Form;
