import React from 'react'
import Invoicing from './CheckoutTypes/Invoicing'
import KUB from './CheckoutTypes/KUB'

const ECheckoutTypes = {
    INVOICING: 'INVOICING',
    KUB_B2B: 'KUB_B2B'
};

export default class CheckoutTypeSwitcher extends React.Component {
    constructor() {
        super();

        this.state = {
            currentType: ECheckoutTypes.INVOICING
        }
    }


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
        return checkoutType

    }
}