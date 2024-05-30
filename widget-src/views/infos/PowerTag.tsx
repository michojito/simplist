const { widget } = figma
const {AutoLayout, Text, Line} = widget

//Import
import { ColorPalette, CornerRadius, Font, Spacing } from "../../constants"
import { Icon } from "../Icon"


type Props = {
    color: ColorPalette
}

export function PowerTag (props:Props) {

    return(
        <AutoLayout
            cornerRadius={CornerRadius.s}
            spacing={Spacing.xxs}
            padding={{horizontal: Spacing.xs, vertical: Spacing.xxs}}
            verticalAlignItems='center'
            fill={props.color.accent.medium}
        >
            <Text
                name='Power'
                fill={props.color.text.accent}
                fontFamily={Font.family}
                fontSize={9}
                letterSpacing={3}
                fontWeight={700}
                textCase='upper'
            >
                Power
            </Text>
            <Icon name='Icon' svg='bolt' fill={props.color.text.accent} size='small' />
        </AutoLayout>
    )
}