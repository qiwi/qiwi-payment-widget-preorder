import React, { Component } from 'react';

import Button from '../../../components/Button';
import styled from 'styled-components';
import {media} from "../../../modules/helpers";

const Container = styled.div`
    max-width: 100%;
`;

const Title = styled.div`
    font-family: MuseoSansCyrl;
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    text-align: center;
    color: #000000;

    @media ${media.mobile} {
        display: none;
    }
`;

const DifferentSumButton = styled(Button)`
    margin-top: 24px;
    font-size: 14px;
    line-height: 20px;
    
    @media ${media.mobile} {
        margin: 8px 0 0;
        width: 100%;

        &:nth-child(2n + 1) {
            margin-right: 0;
        }
    }
    
    &:nth-child(-n + 2) {
        margin-top: 16px;
    }
    
    &:nth-child(2n + 1) {
        margin-right: 20px;
    }

    
`;

class MultipleChoiceForm extends Component {
    render() {
        return (
            <Container>
                <Title>Пожалуйста, выберите сумму:</Title>
                <div>
                    {this.props.sumAmount.map((sum, index) => {
                        return (
                            <DifferentSumButton
                                key={index}
                                width="148px"
                                onClick={() => {
                                    this.props.redirect(sum, true);
                                }}>
                                {sum} &#x20bd;
                            </DifferentSumButton>
                        ); /*&#x20bd; - ruble sign*/
                    })}
                    <DifferentSumButton
                        onClick={() => {
                            this.props.history.push({
                                pathname: this.props.toFormPath,
                                search: window.location.search,
                            });
                        }}
                        width="147px">
                        Другая сумма
                    </DifferentSumButton>
                </div>
            </Container>
        );
    }
}

export default MultipleChoiceForm;
