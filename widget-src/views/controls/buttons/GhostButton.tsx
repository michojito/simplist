const { widget } = figma
const {AutoLayout, Text} = widget

// Imports
import { ColorPalette, CornerRadius, Font, Spacing } from "../../../constants"
import { IconName } from "../../../models/IconLibrary"
import { shadeColor } from "../../../utils"
import { Icon } from "../../Icon"

type Props = {
    leadingIcon?: IconName
    content?: string
    trailingIcon?: IconName

    // Styling
    color?: ColorPalette
    textColor?: string
    fill?: string
    leftaligned?: boolean

    width?: WidgetJSX.AutolayoutSize
    height?: WidgetJSX.AutolayoutSize

    onClick?: ((event: WidgetClickEvent) => void | Promise<any>)
}
export function GhostButton (props: Props) {
    
    return (
        <AutoLayout
            name='Button'
            fill={props.fill}
            cornerRadius={CornerRadius.s}
            spacing={Spacing.xxs}
            padding={Spacing.xs}
            width={props.width || 'hug-contents'}
            height={props.height || 'hug-contents'}
            horizontalAlignItems={props.leftaligned ? 'start' : 'center'}
            verticalAlignItems='center'
            onClick={props.onClick}
            hoverStyle={{
                fill: (props.fill !== undefined ? shadeColor(props.fill, -20) : props.color?.neutrals.lowest)
            }}
        >
            { props.leadingIcon !== undefined && (
                <Icon name='Leading Icon' svg={props.leadingIcon} size='medium'
                    fill={props.textColor || props.color?.text.accent || '#fff'}
                />
            )}
            { props.content !== undefined && (
                <Text
                    name='Text'
                    fill={props.textColor || props.color?.accent.medium || '#000'}
                    horizontalAlignText='center'
                    fontFamily={Font.family}
                    fontSize={Font.body.medium.size}
                    fontWeight={Font.body.medium.weight}
                    lineHeight={Font.body.medium.lineHeight}
                >
                    {props.content}
                </Text>
            )}
            { props.trailingIcon !== undefined && (
                <Icon name='Leading Icon' svg={props.trailingIcon} size='medium'
                    fill={props.textColor || props.color?.text.accent || '#fff'}
                />
            )}
        </AutoLayout>
    )
}