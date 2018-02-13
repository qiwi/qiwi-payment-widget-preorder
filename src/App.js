import React, { Component } from 'react';

import Preorder from './modules/Preorder';

import Preselect from './views/Preselect';
import Form from './views/Form';

import Card from './components/Card';
import TechnologiesPics from './components/TechnologiesPics';
import MethodPayments from './components/MethodPayments';

const preorder = new Preorder();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: 'preselect',
            merchantInfo: {}
        };
    }

    async componentDidMount() {
        const merchantInfo = await preorder.getMerchantInfo();

        document.title = merchantInfo.merchant_name;

        this.setState({
            merchantInfo
        });
    }

    toForm = () => {
        this.setState({
            view: 'form'
        });
    };

    render() {
        const defaultSum = [100, 200, 300];

        const views = {
            preselect: (
                <Preselect
                    toForm={this.toForm}
                    sumAmont={
                        this.state.merchantInfo.merchant_payment_sum_amount ||
                        defaultSum
                    }
                    redirect={preorder.redirect}
                />
            ),
            form: <Form redirect={preorder.redirect}/>
        };

        return (
            <div className="app">
                <Card width="438" className="centered">
                    <Card.Header>
                        <Card.Title>
                            {this.state.merchantInfo.merchant_name ||
                                'Наименование организации'}
                        </Card.Title>
                        <Card.Desc>
                            {
                                this.state.merchantInfo
                                    .merchant_widget_description
                            }
                        </Card.Desc>
                    </Card.Header>
                    <Card.Body>
                        {views[this.state.view]}
                        <MethodPayments height="18">
                            Оплата любым удобным для вас способом
                        </MethodPayments>
                    </Card.Body>
                    <Card.Footer>
                        <TechnologiesPics height="20" />
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://kassa.qiwi.com/support">
                            Помощь
                        </a>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default App;
