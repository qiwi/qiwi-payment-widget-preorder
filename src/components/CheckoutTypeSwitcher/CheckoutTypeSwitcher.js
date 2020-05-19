import React from 'react'
import Invoicing from './CheckoutTypes/Invoicing'
import KUB from './CheckoutTypes/KUB'
import YandexMoney from './CheckoutTypes/YandexMoney'
import Mobile from "../Mobile"
import MobileCheckoutTypeSwitcher from './MobileCheckoutTypeSwitcher'
import DesktopCheckoutTypeSwitcher from './DesktopCheckoutTypeSwitcher'
import Logo from '../Logo'
import Card from "../Card";
import {Divider, PaymentCard, MobileCardDescription, MobileCardHeader} from "./styled";
import Desktop from "../Desktop/Desktop";
import {styleCode} from '../../styles'

const ECheckoutTypes = {
    INVOICING: 'INVOICING',
    KUB: 'KUB',
    YANDEX_MONEY: 'YANDEX_MONEY'
};


export default class CheckoutTypeSwitcher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentType: ECheckoutTypes.INVOICING,
            types: [
                {
                    typeName: ECheckoutTypes.INVOICING,
                    disabled: false,
                    icon: 'invoicing',
                    label: 'QIWI Касса'
                },
                {
                    typeName: ECheckoutTypes.KUB,
                    disabled: true,
                    icon: 'kub',
                    label: 'Выставление\nсчета юрлицу'
                },
                {
                    typeName: ECheckoutTypes.YANDEX_MONEY,
                    disabled: true,
                    icon: 'yandex',
                    label: 'Яндекс Кошелек'
                }
            ]
        }
    }

    getEnabledTypes() {
        return this.state.types.filter(type => !type.disabled)
    }

    changeCurrentType(typeName) {
        const type = this.state.types.find(type => type.typeName === typeName);

        if (!((type.typeName === this.state.currentType) || type.disabled)) {
            this.setState({currentType: type.typeName});
        }
    };

    getPaymentMethodData(methodTypeName) {
        return this.props.paymentMethodsData.find(paymentMethod => paymentMethod.paymentMethodCode === methodTypeName)
    }

    componentDidMount() {
        this.props.paymentMethodsData.forEach((paymentMethod) => {
            const newTypes = [...this.state.types];
            const typeInd = this.state.types.findIndex((type) => type.typeName === paymentMethod.paymentMethodCode);

            newTypes[typeInd].disabled = false;
            this.setState({types: newTypes});
        })
    }

    render() {
        let checkoutType;
        switch (this.state.currentType) {
            case ECheckoutTypes.INVOICING:
                checkoutType = <Invoicing {...this.props}/>;
                break;
            case ECheckoutTypes.KUB:
                checkoutType = <KUB {...this.getPaymentMethodData(ECheckoutTypes.KUB)}/>;
                break;
            case ECheckoutTypes.YANDEX_MONEY:
                checkoutType = <YandexMoney {...this.getPaymentMethodData(ECheckoutTypes.YANDEX_MONEY)}/>;
                break;
            default:
                checkoutType = <Invoicing {...this.props}/>;
        }

        return (
            <PaymentCard width="438px">
                <Mobile>
                    <div>
                        <MobileCardHeader>
                            {this.props.hideMerchantName ? <Logo widgetInfo={this.props}/> : <Card.Title>
                                    {(this.props.widgetStyles[styleCode.PAY_FORM_MERCHANT_NAME] || this.props.widgetMerchantName || 'Наименование организации')}
                            </Card.Title>}
                        </MobileCardHeader>
                        <MobileCardDescription>{this.props.widgetDescription}</MobileCardDescription>
                    </div>
                </Mobile>

                {this.props && this.props.paymentMethodsData.length > 0 ?
                    <div>
                        <Desktop>
                            <DesktopCheckoutTypeSwitcher onTypeChange={this.changeCurrentType.bind(this)}
                                                         types={this.getEnabledTypes()}
                                                         currentType={this.state.currentType}/>

                            <Divider/>
                        </Desktop>
                        <Mobile>
                            <MobileCheckoutTypeSwitcher onTypeChange={this.changeCurrentType.bind(this)}
                                                        types={this.getEnabledTypes()}
                                                        currentType={this.state.currentType}/>
                        </Mobile>
                    </div> : null}

                {checkoutType}
            </PaymentCard>
        )
    }
}