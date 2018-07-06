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
            widget_merchant_metric,
            widget_alias_code,
            widget_merchant_name,
            widget_description,
            widget_merchant_offer
        } = this.props.merchantInfo;
        return (
            <div>
                {widget_merchant_metric && (
                    <noscript>
                        <div>
                            <img
                                src={`https://mc.yandex.ru/watch/${widget_merchant_metric}`}
                                style={{
                                    position: 'absolute',
                                    left: '-9999px'
                                }}
                                alt=""
                            />
                        </div>
                    </noscript>
                )}
                {widget_alias_code ? (
                    <PreorderCard width="438px">
                        <Card.Header>
                            <Card.Title>
                                {widget_merchant_name || 'Наименование организации'}
                            </Card.Title>
                            <Card.Desc>{widget_description}</Card.Desc>
                        </Card.Header>
                        <PreorderCardBody>
                            {this.props.children}
                            <MethodPayments height="18">
                                Оплата любым удобным для вас способом
                            </MethodPayments>
                        </PreorderCardBody>
                        <PreorderCardFooter>
                            {widget_merchant_offer && <Oferta link={widget_merchant_offer} />}
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
