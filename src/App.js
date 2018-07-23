import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Preorder from './modules/Preorder';

import Layout from './Layout';

import Preselect from './views/Preselect';
import Form from './views/Form';
import {styleCode} from "./styles";

const preorder = new Preorder();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            widgetInfo: {},
            errorLoading: false
        };
    }

    async componentDidMount() {
        try {
            const widgetInfo = await preorder.getwidgetInfo();

            document.title = widgetInfo.widgetMerchantName;

            preorder.addMetricCounter(widgetInfo.widgetMerchantMetric);

            this.setState({
                widgetInfo
            });
        } catch (err) {
            this.setState({
                errorLoading: true
            });
        }
    }

    render() {
        const defaultSum = [100, 200, 300];

        const widgetAliasCode = `/${this.state.widgetInfo.widgetAliasCode}`;

        const toFormPath = `/form${widgetAliasCode}`;
        this.state.widgetInfo.widgetPaymentSumAmount = this.state.widgetInfo.widgetPaymentSumAmount || [];
        if(this.state.widgetInfo.widgetPaymentSumAmount.length === 0) {
            this.state.widgetInfo.widgetPaymentSumAmount = defaultSum;
        }
        const widgetStyles = this.state.widgetInfo.widgetStyles;
        const color = (widgetStyles && widgetStyles[styleCode.WIDGET_BACKGROUND])? widgetStyles[styleCode.WIDGET_BACKGROUND] : '';
        return (
            <Layout
                widgetInfo={this.state.widgetInfo}
                errorLoading={this.state.errorLoading}>
                <Switch>
                    <Route
                        exact
                        path={widgetAliasCode}
                        render={(props) => (
                            <Preselect
                                {...props}
                                color={color}
                                sumAmont={
                                    this.state.widgetInfo.widgetPaymentSumAmount
                                }
                                toFormPath={toFormPath}
                                redirect={preorder.redirect}
                            />
                        )}
                    />
                    <Route
                        path={toFormPath}
                        render={() => <Form redirect={preorder.redirect} />}
                    />
                    <Redirect path="/" to={widgetAliasCode} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
