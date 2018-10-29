import React from 'react';
import Mobile from "../../../Mobile/Modile";
import OptionalRenderer from "../../../OptionalRenderer";
import MethodPaymentsIcons from "../../../MethodPaymentsIcons";
import Desktop from "../../../Desktop";
import Oferta from "../../../Oferta";
import {Route, Redirect, Switch} from 'react-router-dom';
import Card from "../../../Card";
import styled from "styled-components";
import Preselect from '../../../../views/Preselect';
import Form from '../../../../views/Form';
import {media} from "../../../../modules/helpers";
import {preorder} from '../../../../App'

export const PaymentBody = styled(Card.Body)`
    position: relative;
    max-width: 100%;
    
    @media ${media.mobile} {
        min-height: 270px;
        align-items: unset;
        box-sizing: border-box;
        padding: 20px;
    }
`;

export const PaymentCard = styled(Card)`
    @media ${media.mobile} {
        width: 100%;
        max-width: 820px;
        border-radius: 0;
    }
`;


export default function Invoicing(props) {
    const {
        widgetAliasCode,
        widgetMerchantName,
        widgetDescription,
        widgetMerchantOffer,
        widgetPaymentSumAmount
    } = props;
    const widgetAliasCodePath = `/${widgetAliasCode}`;
    const toFormPath = `/form${widgetAliasCodePath}`;

    return (
        <PaymentCard width="438px">
            <Mobile>
                <Card.Header>
                    <Card.Title>
                        {widgetMerchantName || 'Наименование организации'}
                    </Card.Title>
                    <Card.Desc>{widgetDescription}</Card.Desc>
                </Card.Header>
            </Mobile>
            <PaymentBody>
                <Switch>
                    <Route
                        exact
                        path={widgetAliasCodePath}
                        render={(props) => (
                            <Preselect
                                {...props}
                                sumAmont={
                                    widgetPaymentSumAmount
                                }
                                toFormPath={toFormPath}
                                redirect={preorder.redirect}
                            />
                        )}
                    />
                    <Route
                        path={toFormPath}
                        render={() => <Form
                            redirect={preorder.redirect}/>}
                    />
                    <Redirect path="/" to={widgetAliasCodePath}/>
                </Switch>
                <MethodPaymentsIcons height="18">
                    Оплата любым удобным для вас способом
                </MethodPaymentsIcons>
                <OptionalRenderer when={widgetMerchantOffer}>
                    <Desktop>
                        <Oferta link={widgetMerchantOffer}/>
                    </Desktop>
                </OptionalRenderer>
            </PaymentBody>
        </PaymentCard>
    )
}