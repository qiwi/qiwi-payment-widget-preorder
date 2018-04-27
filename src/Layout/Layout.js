import React, { Component } from 'react';

import Loader from '../components/Loader';

import Card from '../components/Card';
import TechnologiesPics from '../components/TechnologiesPics';
import MethodPayments from '../components/MethodPayments';
import Oferta from '../components/Oferta';

import {
    PreorderCard,
    PreorderCardBody,
    PreorderCardFooter,
    HelpLink
} from './styled';

export default class Layout extends Component {
    render() {
        const {
            merchant_metric,
            merchant_alias_code,
            merchant_name,
            merchant_widget_description,
            merchant_offer
        } = this.props.merchantInfo;
        return (
            <div>
                {merchant_metric && (
                    <noscript>
                        <div>
                            <img
                                src={`https://mc.yandex.ru/watch/${merchant_metric}`}
                                style={{
                                    position: 'absolute',
                                    left: '-9999px'
                                }}
                                alt=""
                            />
                        </div>
                    </noscript>
                )}
                {merchant_alias_code ? (
                    <PreorderCard width="438px">
                        <Card.Header>
                            <Card.Title>
                                {merchant_name || 'Наименование организации'}
                            </Card.Title>
                            <Card.Desc>{merchant_widget_description}</Card.Desc>
                        </Card.Header>
                        <PreorderCardBody>
                            {this.props.children}
                            <MethodPayments height="18">
                                Оплата любым удобным для вас способом
                            </MethodPayments>
                        </PreorderCardBody>
                        <PreorderCardFooter>
                            {merchant_offer && (
                                <Oferta
                                    link={
                                        merchant_offer
                                    }
                                />
                            )}
                            <TechnologiesPics height="20" />
                            <HelpLink
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://kassa.qiwi.com/support">
                                Помощь
                            </HelpLink>
                        </PreorderCardFooter>
                    </PreorderCard>
                ) : (
                    <Loader error={this.props.errorLoading} />
                )}
            </div>
        );
    }
}
