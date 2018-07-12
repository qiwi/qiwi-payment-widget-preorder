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
            widgetMerchantMetric,
            widgetAliasCode,
            widgetMerchantName,
            widgetDescription,
            widgetMerchantOffer
        } = this.props.merchantInfo;
        return (
            <div>
                {widgetMerchantMetric && (
                    <noscript>
                        <div>
                            <img
                                src={`https://mc.yandex.ru/watch/${widgetMerchantMetric}`}
                                style={{
                                    position: 'absolute',
                                    left: '-9999px'
                                }}
                                alt=""
                            />
                        </div>
                    </noscript>
                )}
                {widgetAliasCode ? (
                    <PreorderCard width="438px">
                        <Card.Header>
                            <Card.Title>
                                {widgetMerchantName || 'Наименование организации'}
                            </Card.Title>
                            <Card.Desc>{widgetDescription}</Card.Desc>
                        </Card.Header>
                        <PreorderCardBody>
                            {this.props.children}
                            <MethodPayments height="18">
                                Оплата любым удобным для вас способом
                            </MethodPayments>
                        </PreorderCardBody>
                        <PreorderCardFooter>
                            {widgetMerchantOffer && <Oferta link={widgetMerchantOffer} />}
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
