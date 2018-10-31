import React from 'react'
import Invoicing from './CheckoutTypes/Invoicing'
import KUB from './CheckoutTypes/KUB'
import Mobile from "../Mobile"
import MobileCheckoutTypeSwitcher from './MobileCheckoutTypeSwitcher'
import DesktopCheckoutTypeSwitcher from './DesktopCheckoutTypeSwitcher'
import Card from "../Card";
import {
    Divider,
    PaymentCard
} from "./styled";
import Desktop from "../Desktop/Desktop";

const ECheckoutTypes = {
    INVOICING: 'INVOICING',
    KUB_B2B: 'KUB_B2B'
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
                    label: 'Оплата\nонлайн'
                },
                {
                    typeName: ECheckoutTypes.KUB_B2B,
                    disabled: false,
                    icon: 'kub',
                    label: 'Выставление\nсчета юрлицу'
                }
            ]
        }
    }

    changeCurrentType(typeName) {
        const type = this.state.types.find(type => type.typeName === typeName);

        if (!((type.typeName === this.state.currentType) || type.disabled)) {
            this.setState({currentType: type.typeName});
        }
    };

    render() {
        let checkoutType;
        switch (this.state.currentType) {
            case ECheckoutTypes.INVOICING:
                checkoutType = <Invoicing {...this.props}/>;
                break;
            case ECheckoutTypes.KUB_B2B:
                checkoutType = <KUB {...this.props}/>;
                break;
            default:
                checkoutType = <Invoicing {...this.props}/>;
        }

        return (
            <PaymentCard width="438px">
                <Mobile>
                    <Card.Header>
                        <Card.Title>
                            {this.props.widgetMerchantName || 'Наименование организации'}
                        </Card.Title>
                        <Card.Desc>{this.props.widgetDescription}</Card.Desc>
                    </Card.Header>
                </Mobile>

                {this.props && this.props.kubWidgetId ?
                    <div>
                        <Desktop>
                            <DesktopCheckoutTypeSwitcher onTypeChange={this.changeCurrentType.bind(this)}
                                                         types={this.state.types}
                                                         currentType={this.state.currentType}/>

                            <Divider/>
                        </Desktop>
                        <Mobile>
                            <MobileCheckoutTypeSwitcher onTypeChange={this.changeCurrentType.bind(this)}
                                                        types={this.state.types}
                                                        currentType={this.state.currentType}/>
                        </Mobile>
                    </div> : null}

                {checkoutType}
            </PaymentCard>
        )
    }
}