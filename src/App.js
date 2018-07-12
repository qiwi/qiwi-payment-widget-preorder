import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Preorder from './modules/Preorder';

import Layout from './Layout';

import Preselect from './views/Preselect';
import Form from './views/Form';

const preorder = new Preorder();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            merchantInfo: {},
            errorLoading: false
        };
    }

    async componentDidMount() {
        try {
            const merchantInfo = await preorder.getMerchantInfo();

            document.title = merchantInfo.widgetMerchantName;

            preorder.addMetricCounter(merchantInfo.widgetMerchantMetric);

            this.setState({
                merchantInfo
            });
        } catch (err) {
            this.setState({
                errorLoading: true
            });
        }
    }

    render() {
        const defaultSum = [100, 200, 300];

        const widgetAliasCode = `/${this.state.merchantInfo.widgetAliasCode}`;

        const toFormPath = `/form${widgetAliasCode}`;
        this.state.merchantInfo.widgetPaymentSumAmount = this.state.merchantInfo.widgetPaymentSumAmount || [];
        if(this.state.merchantInfo.widgetPaymentSumAmount.length === 0) {
            this.state.merchantInfo.widgetPaymentSumAmount = defaultSum;
        }
        return (
            <Layout
                merchantInfo={this.state.merchantInfo}
                errorLoading={this.state.errorLoading}>
                <Switch>
                    <Route
                        exact
                        path={widgetAliasCode}
                        render={(props) => (
                            <Preselect
                                {...props}
                                sumAmont={
                                    this.state.merchantInfo.widgetPaymentSumAmount
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
