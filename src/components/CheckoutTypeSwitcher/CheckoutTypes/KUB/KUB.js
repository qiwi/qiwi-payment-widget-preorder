import React from 'react'
import styled from 'styled-components'
import Button from '../../../Button'

const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 200px;
    align-items: center;
    justify-content: center;
`

export default function KUB({kubWidgetId}) {
    return (<Container>
        <Button
            onClick={() => window.open(`https://lk.kub-24.ru/out/invoice/${kubWidgetId}`)}>
            Оплатить like a boss
        </Button>
    </Container>)
}