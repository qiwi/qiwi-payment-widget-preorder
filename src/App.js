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
            this.formatState();
        } catch (err) {
            this.setState({
                errorLoading: true
            });
        }
    }

    formatState(){
        const defaultSum = [100, 200, 300];
        const widgetPaymentSumAmount = this.state.widgetInfo.widgetPaymentSumAmount || [];
        if(widgetPaymentSumAmount.length === 0) {
            this.setState({widgetInfo: {widgetPaymentSumAmount: defaultSum}});
        }
        if(this.state.widgetInfo.widgetPaymentSumAmount.length > 3) {
            this.setState({widgetInfo: {widgetPaymentSumAmount: this.state.widgetInfo.widgetPaymentSumAmount.slice(0, 4)}});
        }
    }


    render() {
        const widgetAliasCodePath = `/${this.state.widgetInfo.widgetAliasCode}`;

        const toFormPath = `/form${widgetAliasCodePath}`;

        const widgetStyles = this.state.widgetInfo.widgetStyles;
        const color = (widgetStyles && widgetStyles[styleCode.PREORDER_PRIMARY_COLOR])? widgetStyles[styleCode.PREORDER_PRIMARY_COLOR] : '';
        return (
            <Layout
                widgetInfo={this.state.widgetInfo}
                errorLoading={this.state.errorLoading}>
                <Switch>
                    <Route
                        exact
                        path={widgetAliasCodePath}
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
                        render={() => <Form
                            color={color}
                            redirect={preorder.redirect} />}
                    />
                    <Redirect path="/" to={widgetAliasCodePath} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
