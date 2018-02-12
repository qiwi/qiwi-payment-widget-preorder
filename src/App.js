import React, { Component } from 'react';

import Card from './components/Card';
import TechnologiesPics from './components/TechnologiesPics';
import MethodPayments from './components/MethodPayments';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: 'preselect'
        };
    }

    toAmountForm = () => {
        this.setState({
            view: 'amountForm'
        });
    };

    render() {
        const views = {
            preselect: (
                <div>
                    preselect
                    <button
                        onClick={this.toAmountForm}>
                        Перевести
                    </button>
                </div>
            ),
            amountForm: <div>amountForm</div>
        };

        return (
            <div className="app">
                <Card width="438" className="centered">
                    <Card.Header>
                        <Card.Title>Фонд Константина Хабенского</Card.Title>
                        <Card.Desc>
                            Фонд занимается организацией помощи детям с
                            онкологическими и другими тяжёлыми заболеваниями
                            головного мозга
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
