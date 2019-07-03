import React, {Component} from 'react';

import Loader from '../components/Loader';

import Logo from '../components/Logo';
import Card from '../components/Card';
import TechnologiesPics from '../components/TechnologiesPics';
import Oferta from '../components/Oferta';
import ThemedHelmet from '../components/ThemedHelmet';

import {CardHolder, ContentBlock, Footer, HelpLink, MerchantInfoCard} from './styled';
import OptionalRenderer from "../components/OptionalRenderer";
import Mobile from "../components/Mobile/Mobile";
import CheckoutTypeSwitcher from "../components/CheckoutTypeSwitcher";
import Desktop from "../components/Desktop/Desktop";

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
            hideMerchantName,
            widgetStyles
        } = this.props.widgetInfo;

        return (
            <div>
                <ThemedHelmet/>
                <OptionalRenderer when={widgetMerchantMetric}>
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
                </OptionalRenderer>
                {widgetAliasCode ? (
                    <ContentBlock width="820px">
                        <CardHolder>
                            <CheckoutTypeSwitcher {...this.props.widgetInfo}/>
                            <MerchantInfoCard width="382px">
                                <Card.Header>
                                    <Logo {...this.props}/>
                                    {!hideMerchantName && <Card.Title>
                                        {widgetStyles['PAY_FORM_MERCHANT_NAME'] || widgetMerchantName || 'Наименование организации'}
                                    </Card.Title>}
                                    <Card.Desc>{widgetDescription}</Card.Desc>
                                </Card.Header>
                                <OptionalRenderer when={widgetMerchantOffer}>
                                    <Oferta link={widgetMerchantOffer}/>
                                </OptionalRenderer>
                            </MerchantInfoCard>
                        </CardHolder>
                        <Footer>
                            <Mobile>
                                <OptionalRenderer when={widgetMerchantOffer}>
                                    <Oferta link={widgetMerchantOffer}/>
                                </OptionalRenderer>
                            </Mobile>
                            <TechnologiesPics height="20px"/>
                            <Desktop>
                                <HelpLink
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://qiwi.com/support.action">
                                    Помощь
                                </HelpLink>
                            </Desktop>
                        </Footer>
                    </ContentBlock>
                ) : (
                    <Loader error={this.props.errorLoading}/>
                )}
            </div>
        );
    }
}
