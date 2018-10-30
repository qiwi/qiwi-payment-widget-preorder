import React from 'react'
import {
    Container,
    Item,
    ItemActive,
    IconWrapper,
    Label,
    SelectedWrapper,
    Selected,
    IconComponents
} from "../styled";
import capitalize from "lodash/capitalize";

function getItemIconComponent(iconName, isSelected) {
    return IconComponents[`Icon${capitalize(iconName)}${isSelected ? 'Selected' : ''}`]
}

export default function DesktopCheckoutTypeSwitcher({onTypeChange, types, currentType}) {
    const cursorOffset = types.findIndex(item => currentType === item.typeName) * 100;

    return (
        <Container>
            {types.map((type) => {
                let ItemComponent = Item;
                if (type.typeName === currentType) ItemComponent = ItemActive;

                const IconComponent = getItemIconComponent(type.icon, type.typeName === currentType);

                return (
                    <ItemComponent
                        key={`type-${type.typeName}`}
                        onClick={() => onTypeChange(type.typeName)}
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
                <Selected width={100 / types.length}
                          transform={`translateX(${cursorOffset}%)`}/>
            </SelectedWrapper>
        </Container>
    )
}