import React, { Component } from 'react';

import Button from '../../../components/Button';
import styled from 'styled-components';
import {media} from "../../../modules/helpers";

const Container = styled.div`
    max-width: 100%;
`;

const Amount = styled.div`
    font-family: MuseoSansCyrl;
    font-size: 20px;
    font-weight: 300;
    line-height: 20px;
    text-align: center;
    margin-top: 20px;
    color: #000000;

    @media ${media.mobile} {
        display: none;
    }
`;

const PayButton = styled(Button)`
    margin-top: 24px;
    font-size: 14px;
    line-height: 20px;
    
    @media ${media.mobile} {
        margin: 8px 0 0;
        width: 100%;
    }
`;

class SingleChoiceForm extends Component {
    render() {
        const amount = new Intl.NumberFormat('ru-RU').format(this.props.amount);
        return (
            <Container>
                <Amount>{amount} &#x20bd;</Amount> {/*&#x20bd; - ruble sign*/}
                <div>
                    <PayButton
                        onClick={() => {
                            this.props.redirect(this.props.amount, true);
                        }}
                        width="147px">
                        Продолжить
                    </PayButton>
                </div>
            </Container>
        );
    }
}

export default SingleChoiceForm;
