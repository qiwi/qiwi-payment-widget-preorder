import React, { Component } from 'react';

import Button from '../../components/Button';
import styled from 'styled-components';

const StyledPreselect = styled.div`
    font-family: MuseoSansCyrl;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.31;
    text-align: center;
    color: #000000;
`;

const PreselectButton = styled(Button)`
    margin-top: 32px;

    &:nth-child(2n + 1) {
        margin-right: 24px;
    }
`;

class Preselect extends Component {
    render() {
        return (
            <StyledPreselect>
                Пожалуйста, выберите сумму:
                <div>
                    {this.props.sumAmont.map((sum, index) => {
                        return (
                            <PreselectButton
                                key={index}
                                width="147px"
                                onClick={() => {
                                    this.props.redirect(sum);
                                }}>
                                {sum} ₽
                            </PreselectButton>
                        );
                    })}
                    <PreselectButton onClick={this.props.toForm} width="147px">
                        Другая сумма
                    </PreselectButton>
                </div>
            </StyledPreselect>
        );
    }
}

export default Preselect;
