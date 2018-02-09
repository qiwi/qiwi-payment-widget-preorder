import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './styles/index.css';

import Card from './components/Card';
import CardHeader from './components/CardHeader';
import Title from './components/Title';
import Desc from './components/Desc';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Card width={438} className="centered">
                    <CardHeader>
                        <Title>Фонд Константина Хабенского</Title>
                        <Desc>
                            Фонд занимается организацией помощи детям с
                            онкологическими и другими тяжёлыми заболеваниями
                            головного мозга
                        </Desc>
                    </CardHeader>
                    Карточка
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(App);
