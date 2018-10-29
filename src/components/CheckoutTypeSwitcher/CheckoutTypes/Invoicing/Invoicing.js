import React from 'react';
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




export default function Invoicing(props) {
    const {
        widgetAliasCode,
        widgetMerchantOffer,
        widgetPaymentSumAmount
    } = props;
    const widgetAliasCodePath = `/${widgetAliasCode}`;
    const toFormPath = `/form${widgetAliasCodePath}`;

    return (
        <div>
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
        </div>
    )
}