import React, {Component} from 'react';

import Loader from '../components/Loader';

import Card from '../components/Card';
import TechnologiesPics from '../components/TechnologiesPics';
import MethodPayments from '../components/MethodPayments';
import Oferta from '../components/Oferta';

import {styleCode} from "../styles/index";

import {
    CardHolder,
    MerchantInfoCard,
    ContentBlock,
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
            widgetMerchantOffer,
            widgetStyles
        } = this.props.widgetInfo;
        const color = (widgetStyles && widgetStyles[styleCode.WIDGET_BACKGROUND])? widgetStyles[styleCode.WIDGET_BACKGROUND] : '';
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
                    <ContentBlock width="820px">
                        <CardHolder>
                            <Card width="438px">
                                <PreorderCardBody>
                                    {this.props.children}
                                    <MethodPayments height="18">
                                        Оплата любым удобным для вас способом
                                    </MethodPayments>
                                    {widgetMerchantOffer && <Oferta link={widgetMerchantOffer}/>}
                                </PreorderCardBody>
                            </Card>
                            <MerchantInfoCard width="382px" color={color}>
                                <Card.Header>
                                    <Card.Title color={color}>
                                        {widgetMerchantName || 'Наименование организации'}
                                    </Card.Title>
                                    <Card.Desc color={color}>{widgetDescription}</Card.Desc>
                                </Card.Header>
                            </MerchantInfoCard>
                        </CardHolder>
                        <PreorderCardFooter>
                            <TechnologiesPics height="20"/>
                            <HelpLink
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://kassa.qiwi.com/support">
                                Помощь
                            </HelpLink>
                        </PreorderCardFooter>
                    </ContentBlock>
                ) : (
                    <Loader error={this.props.errorLoading}/>
                )}
            </div>
        );
    }
}
