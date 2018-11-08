import React, { Component } from 'react';


import Layout from './Layout';
import Preorder from './modules/Preorder';
import {styleCode} from "./styles";
import {ThemeProvider} from 'styled-components';

export const preorder = new Preorder();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            widgetInfo: {},
            errorLoading: false
        };
    }

    async componentDidMount() {
        try {
            let widgetInfo = await preorder.getwidgetInfo();

            document.title = widgetInfo.widgetMerchantName;

            preorder.addMetricCounter(widgetInfo.widgetMerchantMetric);

            widgetInfo = this.formatWidgetInfo(widgetInfo);
            this.setState({
                widgetInfo
            });
        } catch (err) {
            this.setState({
                errorLoading: true
            });
        }
    }

    formatWidgetInfo(widgetInfo){
        let formatted = Object.assign({}, widgetInfo);

        formatted.widgetPaymentSumAmount = formatted.widgetPaymentSumAmount || [];
        if(formatted.widgetPaymentSumAmount.length > 3) {
            formatted.widgetPaymentSumAmount = formatted.widgetPaymentSumAmount.slice(0, 4);
        }
        formatted.primaryColor = '';
        formatted.gradientColor = '';
        formatted.bgUrl = '';
        formatted.logoUrl = '';
        formatted.logoPngUrl = '';
        formatted.enableGradient = true;
        const widgetStyles = formatted.widgetStyles;
        if (widgetStyles) {
            formatted.primaryColor = widgetStyles[styleCode.PREORDER_PRIMARY_COLOR] || formatted.primaryColor;
            formatted.bgUrl = widgetStyles[styleCode.WIDGET_BACKGROUND_PICTURE_URL] || formatted.bgUrl;

            formatted.logoUrl = widgetStyles[styleCode.WIDGET_HORIZONTAL_LOGO_URL] || formatted.logoUrl;
            formatted.logoPngUrl = widgetStyles[styleCode.WIDGET_HORIZONTAL_LOGO_URL_PNG] || formatted.logoPngUrl;
            if (widgetStyles[styleCode.PREORDER_ENABLE_GRADIENT]) {
                formatted.enableGradient = widgetStyles[styleCode.PREORDER_ENABLE_GRADIENT] === '1';
            }
        }
        formatted.gradientColor = formatted.primaryColor;
        return formatted;
    }

    getThemeFromWidgetInfo() {
        return {
            primaryColor: this.state.widgetInfo.primaryColor,
            bgUrl: this.state.widgetInfo.bgUrl,
            enableGradient: this.state.widgetInfo.enableGradient,
            gradientColor: this.state.widgetInfo.gradientColor,
            logoUrl: this.state.widgetInfo.logoUrl,
            logoPngUrl: this.state.widgetInfo.logoPngUrl,
        }
    }


    render() {
        return (
            <ThemeProvider theme={this.getThemeFromWidgetInfo()}>
                <Layout
                    widgetInfo={this.state.widgetInfo}
                    errorLoading={this.state.errorLoading}>

                </Layout>
            </ThemeProvider>
        );
    }
}

export default App;
