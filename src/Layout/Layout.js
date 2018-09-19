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
        let primaryColor = '';
        let gradientColor = '';
        let bgUrl = '';
        let enableGradient = true;
        if (widgetStyles) {
            primaryColor = widgetStyles[styleCode.PREORDER_PRIMARY_COLOR] || primaryColor;
            bgUrl = widgetStyles[styleCode.WIDGET_BACKGROUND_PICTURE_URL] || bgUrl;
            if (widgetStyles[styleCode.PREORDER_ENABLE_GRADIENT]) {
                enableGradient = widgetStyles[styleCode.PREORDER_ENABLE_GRADIENT] === '1';
            }
        }
        gradientColor = primaryColor;
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
                                    <Card.Title color={primaryColor}>
                                        {widgetMerchantName || 'Наименование организации'}
                                    </Card.Title>
                                    <Card.Desc color={primaryColor}>{widgetDescription}</Card.Desc>
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
                            <MerchantInfoCard width="382px" color={gradientColor} url={bgUrl} enableGradient={enableGradient}>
                                <Card.Header>
                                    <Logo {...this.props}/>
                                    <Card.Title color={gradientColor}>
                                        {widgetMerchantName || 'Наименование организации'}
                                    </Card.Title>
                                    <Card.Desc color={gradientColor}>{widgetDescription}</Card.Desc>
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
