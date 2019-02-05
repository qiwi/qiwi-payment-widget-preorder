import React from 'react'
import styled from "styled-components";
import Button from '../../../Button'
import Text from '../../../Text'
import {PaymentBody} from '../../styled'

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 200px;
    align-items: center;
`

const StyledButton = styled(Button)`
    margin-top: 20px;
    max-width: 168px;
`

export default class YandexMoney extends React.Component {

    render() {
        const {paymentMethodData} = this.props;
        return <PaymentBody>
            <Container>
                <Text weight={300}>
                    Вы будете перенаправлены на страницу<br/>
                    Яндекс Кошелека для дальнейшей оплаты
                </Text>
                <StyledButton
                    onClick={() => window.open(`https://money.yandex.ru/to/${paymentMethodData}`)}>
                    Продолжить
                </StyledButton>
            </Container>
        </PaymentBody>
    }
}