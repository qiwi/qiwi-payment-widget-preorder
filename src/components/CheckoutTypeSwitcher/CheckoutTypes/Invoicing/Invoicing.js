import React from 'react';
import MethodPaymentsIcons from "../../../MethodPaymentsIcons";
import {Route, Redirect, Switch} from 'react-router-dom';
import Preselect from '../../../../views/Preselect';
import Form from '../../../../views/Form';
import {preorder} from '../../../../App'
import {PaymentBody} from '../../styled'



export default function Invoicing(props) {
    const {
        widgetAliasCode,
        widgetPaymentSumAmount
    } = props;
    const widgetAliasCodePath = `/${widgetAliasCode}`;
    const toFormPath = `/form${widgetAliasCodePath}`;

    return (
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
            <MethodPaymentsIcons>
                Оплата любым удобным для вас способом
            </MethodPaymentsIcons>
        </PaymentBody>
    )
}