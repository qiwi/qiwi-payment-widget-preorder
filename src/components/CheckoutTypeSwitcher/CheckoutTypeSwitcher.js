import React from 'react'
import Invoicing from './CheckoutTypes/Invoicing'
import KUB from './CheckoutTypes/KUB'
import Mobile from "../Mobile"
import capitalize from 'lodash/capitalize'
import Card from "../Card";
import {
    Container,
    Divider,
    PaymentCard,
    PaymentBody,
    Item,
    ItemActive,
    IconWrapper,
    Label,
    SelectedWrapper,
    Selected,
    IconComponents
} from "./styled";
import Desktop from "../Desktop/Desktop";

const ECheckoutTypes = {
    INVOICING: 'INVOICING',
    KUB_B2B: 'KUB_B2B'
};

function getItemIconComponent(iconName, isSelected) {
    return IconComponents[`Icon${capitalize(iconName)}${isSelected ? 'Selected' : ''}`]
}

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


    render() {
        const cursorOffset = this.state.types.findIndex(item => this.state.currentType === item.typeName) * 100;

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
            <div>
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
                            <Container>
                                {this.state.types.map((type) => {
                                    let ItemComponent = Item;
                                    if (type.typeName === this.state.currentType) ItemComponent = ItemActive;

                                    const IconComponent = getItemIconComponent(type.icon, type.typeName === this.state.currentType);

                                    return (
                                        <ItemComponent
                                            key={`type-${type.typeName}`}
                                            onClick={((type.type === this.state.currentType) || type.disabled) ? null : () => this.setState({currentType: type.typeName})}
                                        >
                                            <IconWrapper>
                                                {IconComponent && <IconComponent/>}
                                            </IconWrapper>
                                            <Label>
                                                {type.label.split('\n').map((line, index) => (
                                                    <span key={`type-${type.typeName}-${index}`}>{line}<br/></span>
                                                ))}
                                            </Label>

                                        </ItemComponent>
                                    )
                                })
                                }
                                <SelectedWrapper>
                                    <Selected width={100 / this.state.types.length}
                                              transform={`translateX(${cursorOffset}%)`}/>
                                </SelectedWrapper>
                            </Container>

                            <Desktop>
                                <Divider/>
                            </Desktop>
                        </div> : null}

                    <PaymentBody>
                        {checkoutType}
                    </PaymentBody>
                </PaymentCard>
            </div>)

    }
}