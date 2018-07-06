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

            document.title = merchantInfo.widget_merchant_name;

            preorder.addMetricCounter(merchantInfo.widget_merchant_metric);

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

        const widgetAliasCode = `/${this.state.merchantInfo.widget_alias_code}`;

        const toFormPath = `/form${widgetAliasCode}`;

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
                                    this.state.merchantInfo
                                        .widget_payment_sum_amount ||
                                    defaultSum
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
