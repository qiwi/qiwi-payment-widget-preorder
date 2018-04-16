import React, { Component } from 'react';

import Loader from '../components/Loader';

import Card from '../components/Card';
import TechnologiesPics from '../components/TechnologiesPics';
import MethodPayments from '../components/MethodPayments';

import {
    PreorderCard,
    PreorderCardBody,
    PreorderCardFooter,
    HelpLink
} from './styled';

export default class Layout extends Component {
    render() {
        return (
            <div>
                {this.props.merchantInfo.merchant_metric && (
                    <noscript>
                        <div>
                            <img
                                src={`https://mc.yandex.ru/watch/${
                                    this.props.merchantInfo.merchant_metric
                                }`}
                                style={{
                                    position: 'absolute',
                                    left: '-9999px'
                                }}
                                alt=""
                            />
                        </div>
                    </noscript>
                )}
                {this.props.merchantInfo.merchant_alias_code ? (
                    <PreorderCard width="438px">
                        <Card.Header>
                            <Card.Title>
                                {this.props.merchantInfo.merchant_name ||
                                    'Наименование организации'}
                            </Card.Title>
                            <Card.Desc>
                                {
                                    this.props.merchantInfo
                                        .merchant_widget_description
                                }
                            </Card.Desc>
                        </Card.Header>
                        <PreorderCardBody>
                            {this.props.children}
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
                ) : (
                    <Loader error={this.props.errorLoading} />
                )}
            </div>
        );
    }
}
