import React, { Component } from 'react';


import Layout from './Layout';
import Preorder from './modules/Preorder';
import {styleCode} from "./styles";
import {getContrastColorByBackground} from "./modules/helpers";

const preorder = new Preorder();

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

        const defaultSum = [100, 200, 300];
        formatted.widgetPaymentSumAmount = formatted.widgetPaymentSumAmount || [];
        if(formatted.widgetPaymentSumAmount.length === 0) {
            formatted.widgetPaymentSumAmount = defaultSum;
        }
        if(formatted.widgetPaymentSumAmount.length > 3) {
            formatted.widgetPaymentSumAmount = formatted.widgetPaymentSumAmount.slice(0, 4);
        }
        formatted.primaryColor = '';
        formatted.gradientColor = '';
        formatted.bgUrl = '';
        formatted.enableGradient = true;
        const widgetStyles = formatted.widgetStyles;
        if (widgetStyles) {
            formatted.primaryColor = widgetStyles[styleCode.PREORDER_PRIMARY_COLOR] || formatted.primaryColor;
            formatted.bgUrl = widgetStyles[styleCode.WIDGET_BACKGROUND_PICTURE_URL] || formatted.bgUrl;
            if (widgetStyles[styleCode.PREORDER_ENABLE_GRADIENT]) {
                formatted.enableGradient = widgetStyles[styleCode.PREORDER_ENABLE_GRADIENT] === '1';
            }
        }
        formatted.gradientColor = formatted.primaryColor;
        return formatted;
    }


    render() {
        const widgetStyles = this.state.widgetInfo.widgetStyles;
        const color = (widgetStyles && widgetStyles[styleCode.PREORDER_PRIMARY_COLOR])? widgetStyles[styleCode.PREORDER_PRIMARY_COLOR] : '';
        return (
            <Layout
                widgetInfo={this.state.widgetInfo}
                errorLoading={this.state.errorLoading}>

            </Layout>
        );
    }
}

export default App;
