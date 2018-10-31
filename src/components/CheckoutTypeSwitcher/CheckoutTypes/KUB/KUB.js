import React from 'react'
import styled from 'styled-components'
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
    max-width: 200px;
`

export default function KUB({kubWidgetId}) {
    return (
        <PaymentBody>
            <Container>
                <Text weight={300}>
                    Выставьте счет на вашу фирму — все документы будут сформированы автоматически.<br/><br/>Вам
                    останется только провести платеж по реквизитам.
                </Text>
                <StyledButton
                    onClick={() => window.open(`https://lk.kub-24.ru/out/invoice/${kubWidgetId}`)}>
                    Выставить счет
                </StyledButton>
            </Container>
        </PaymentBody>)
}