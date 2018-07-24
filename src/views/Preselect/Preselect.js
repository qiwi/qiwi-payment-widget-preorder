import React, { Component } from 'react';

import Button from '../../components/Button';
import styled from 'styled-components';

const PreselectText = styled.div`
    font-family: MuseoSansCyrl;
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    text-align: center;
    color: #000000;

    @media (max-width: 820px) {
        display: none;
    }
`;

const PreselectButton = styled(Button)`
    margin-top: 24px;
    font-size: 14px;
    line-height: 20px;
    
    @media (max-width: 820px) {
        margin: 8px 0 0;
        width: 100%;

        &:nth-child(2n + 1) {
            margin-right: 0;
        }
    }
    
    &:nth-child(2n + 1) {
        margin-right: 20px;
    }

    
`;

class Preselect extends Component {
    render() {
        return (
            <div>
                <PreselectText>Пожалуйста, выберите сумму:</PreselectText>
                <div>
                    {this.props.sumAmont.map((sum, index) => {
                        return (
                            <PreselectButton
                                key={index}
                                width="148px"
                                color={this.props.color}
                                onClick={() => {
                                    this.props.redirect(sum, true);
                                }}>
                                {sum}&#x20bd;
                            </PreselectButton>
                        ); /*&#x20bd; - ruble sign*/
                    })}
                    <PreselectButton
                        onClick={() => {
                            this.props.history.push(this.props.toFormPath);
                        }}
                        color={this.props.color}
                        width="147px">
                        Другая сумма
                    </PreselectButton>
                </div>
            </div>
        );
    }
}

export default Preselect;
