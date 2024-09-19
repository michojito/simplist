const { widget } = figma
const {AutoLayout, Text} = widget

//Imports
import { CornerRadius, Spacing, Font } from "../../../constants"
import { ColorPalette } from "../../../constants"
import { Icon } from "../../Icon"

type Props = {

    // Styling
    color?: ColorPalette
    content: string
    onClick?: ((event: WidgetClickEvent) => void | Promise<any>)

}
export function EditTask (props: Props) {
    return (
        <AutoLayout
            name='Task'
            width='fill-parent'
            direction='horizontal'
            spacing={Spacing.xxs}
            padding={{
                horizontal: Spacing.xxs,
                vertical: Spacing.none
            }}
        >
            <AutoLayout
                name='Container'
                width='fill-parent'
                direction='horizontal'
                spacing={Spacing.s}
            >
                <AutoLayout
                    name="Checkbox"
                    fill={props.color?.background.primary}
                    stroke={props.color?.danger.medium}
                    strokeWidth={2}
                    cornerRadius={CornerRadius.s}
                    width={Spacing.l}
                    height={Spacing.l}
                    horizontalAlignItems='center'
                    verticalAlignItems='center'
                    hoverStyle={{
                        fill: props.color?.danger.lowest,
                    }}
                    onClick={props.onClick}
                >
                    <Icon 
                        name="Trash" 
                        size='small' 
                        fill={props.color?.danger.medium} 
                        svg='trash'
                    />
                </AutoLayout>

                <AutoLayout
                    name='Content'
                    direction='vertical'
                    width='fill-parent'
                    spacing={Spacing.xs}
                >
                    <Text
                        name='Title'
                        width='fill-parent'
                        fontFamily={Font.family}
                        fontSize={Font.body.medium.size}
                        fontWeight={Font.body.medium.weight}
                        lineHeight={Font.body.medium.lineHeight}
                        fill={props.color?.text.primary}
                    >
                        {props.content}
                    </Text>
                </AutoLayout>
            </AutoLayout>
        </AutoLayout>
    )
}