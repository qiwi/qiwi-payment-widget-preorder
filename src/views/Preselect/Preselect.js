import React, { Component } from 'react';

import Button from '../../components/Button';
import Sign from '../../components/Sign';
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
    font-family: MuseoSansCyrl;
    font-size: 14px;
    line-height: 20px;
    
    &:nth-child(2n + 1) {
        margin-right: 20px;
    }

    @media (max-width: 820px) {
        margin: 8px 0 0;
        width: 100%;

        &:nth-child(2n + 1) {
            margin-right: 0;
        }
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
                                width="147px"
                                onClick={() => {
                                    this.props.redirect(sum, true);
                                }}>
                                {sum} <Sign height="12" />
                            </PreselectButton>
                        );
                    })}
                    <PreselectButton
                        onClick={() => {
                            this.props.history.push(this.props.toFormPath);
                        }}
                        width="147px">
                        Другая сумма
                    </PreselectButton>
                </div>
            </div>
        );
    }
}

export default Preselect;
