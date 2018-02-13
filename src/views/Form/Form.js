import React, { Component } from 'react';

import Button from '../../components/Button';
import Field from '../../components/Field';
import styled from 'styled-components';

const FieldWrapper = styled.div`
    width: 170px;
    position: relative;
    margin: 0 auto 32px;
`;

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    inputHandler = (e) => {
        const value = e.target.value;

        this.setState({
            value
        });
    };

    render() {
        return (
            <div>
                <FieldWrapper>
                    <Field
                        onChange={this.inputHandler}
                        value={this.state.value}
                    />
                </FieldWrapper>
                <div>
                    <Button
                        width="159px"
                        color="#ff8c00"
                        onClick={() => this.props.redirect(this.state.value)}>
                        Продолжить
                    </Button>
                </div>
            </div>
        );
    }
}

export default Form;
