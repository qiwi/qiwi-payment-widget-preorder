import React, { Component } from 'react';
import styled from 'styled-components';

import Preorder from './modules/Preorder';

import Preselect from './views/Preselect';
import Form from './views/Form';

import Card from './components/Card';
import TechnologiesPics from './components/TechnologiesPics';
import MethodPayments from './components/MethodPayments';

const preorder = new Preorder();

const PreorderCard = styled(Card)`
    margin: 0 auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;

    @media (max-width: 450px) {
        top: 0;
        transform: translateY(0);
        width: 100%;
        border: 0;
    }
`;

const PreorderCardBody = styled(Card.Body)`
    @media (max-width: 450px) {
        min-height: 270px;
        box-sizing: border-box;
        padding: 20px;
    }
`;

const PreorderCardFooter = styled(Card.Footer)`
    position: relative;
    text-align: center;

    @media (max-width: 450px) {
        background-color: rgb(247, 247, 247);
        padding: 20px;
    }
`;

const HelpLink = styled.a`
    margin-left: 20px;
    font-size: 14px;
    font-weight: 500;
    color: #717171;
    text-decoration: none;

    @media (max-width: 450px) {
        display: block;
        right: 0;
        top: 0;
        left: 0;
        position: relative;
        margin: 10px auto 0;
    }
`;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: 'preselect',
            merchantInfo: {}
        };
    }

    async componentDidMount() {
        try {
            const merchantInfo = await preorder.getMerchantInfo();

            document.title = merchantInfo.merchant_name;

            this.setState({
                merchantInfo
            });
        } catch (err) {
            console.log(err);
        }
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
            form: <Form redirect={preorder.redirect} />
        };

        return (
            <div className="app">
                <PreorderCard width="438px">
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
                    <PreorderCardBody>
                        {views[this.state.view]}
                        <MethodPayments height="18">
                            Оплата любым удобным для вас способом
                        </MethodPayments>
                    </PreorderCardBody>
                    <PreorderCardFooter>
                        <TechnologiesPics height="20" />
                        <HelpLink
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://kassa.qiwi.com/support">
                            Помощь
                        </HelpLink>
                    </PreorderCardFooter>
                </PreorderCard>
            </div>
        );
    }
}

export default App;
