import React, {Component} from 'react';

import Loader from '../components/Loader';

import Logo from '../components/Logo';
import Card from '../components/Card';
import TechnologiesPics from '../components/TechnologiesPics';
import MethodPayments from '../components/MethodPayments';
import Oferta from '../components/Oferta';

import {styleCode} from "../styles/index";

import {
    CardHolder,
    MerchantInfoCard,
    ContentBlock,
    PaymentBody,
    Footer,
    HelpLink,
    PaymentCard
} from './styled';

export default class Layout extends Component {
    updateDimensions() {
        this.setState({});
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        const {
            widgetMerchantMetric,
            widgetAliasCode,
            widgetMerchantName,
            widgetDescription,
            widgetMerchantOffer,
            widgetStyles
        } = this.props.widgetInfo;
        const color = (widgetStyles && widgetStyles[styleCode.PREORDER_PRIMARY_COLOR]) ? widgetStyles[styleCode.PREORDER_PRIMARY_COLOR] : '';
        const bgUrl = (widgetStyles && widgetStyles[styleCode.WIDGET_BACKGROUND_PICTURE_URL]) ? widgetStyles[styleCode.WIDGET_BACKGROUND_PICTURE_URL] : '';
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
                            <PaymentCard width="438px">
                                {window.matchMedia('(max-width: 820px)').matches &&
                                <Card.Header>
                                    <Card.Title color={color}>
                                        {widgetMerchantName || 'Наименование организации'}
                                    </Card.Title>
                                    <Card.Desc color={color}>{widgetDescription}</Card.Desc>
                                </Card.Header>
                                }
                                <PaymentBody>
                                    {this.props.children}
                                    <MethodPayments height="18">
                                        Оплата любым удобным для вас способом
                                    </MethodPayments>
                                    {!window.matchMedia('(max-width: 820px)').matches && widgetMerchantOffer && <Oferta link={widgetMerchantOffer}/>}
                                </PaymentBody>
                            </PaymentCard>
                            <MerchantInfoCard width="382px" color={color} url={bgUrl}>
                                <Card.Header>
                                    <Logo {...this.props}/>
                                    <Card.Title color={color}>
                                        {widgetMerchantName || 'Наименование организации'}
                                    </Card.Title>
                                    <Card.Desc color={color}>{widgetDescription}</Card.Desc>
                                </Card.Header>
                            </MerchantInfoCard>
                        </CardHolder>
                        <Footer>
                            {window.matchMedia('(max-width: 820px)').matches && widgetMerchantOffer && <Oferta link={widgetMerchantOffer}/>}
                            <TechnologiesPics height="20px"/>
                            <HelpLink
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://kassa.qiwi.com/support">
                                Помощь
                            </HelpLink>
                        </Footer>
                    </ContentBlock>
                ) : (
                    <Loader error={this.props.errorLoading}/>
                )}
            </div>
        );
    }
}
