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

    width?: WidgetJSX.AutolayoutSize
    height?: WidgetJSX.AutolayoutSize

    onClick?: ((event: WidgetClickEvent) => void | Promise<any>)
}
export function PrimaryButton (props: Props) {
    
    return (
        <AutoLayout
            name='Button'
            fill={props.fill || props.color?.accent.medium || '#0038ff'}
            cornerRadius={CornerRadius.s}
            spacing={Spacing.xs}
            padding={Spacing.s}
            width={props.width || 'hug-contents'}
            height={props.height || 'hug-contents'}
            horizontalAlignItems='center'
            verticalAlignItems='center'
            onClick={props.onClick}
            hoverStyle={{
                fill: props.fill != undefined ? shadeColor(props.fill, -20) : props.color?.accent.medium || '#002FDE'
            }}
        >
            { props.leadingIcon !== undefined && (
                <Icon 
                    name='Leading Icon' svg={props.leadingIcon} size='medium'
                    fill={props.textColor || props.color?.text.accent || '#fff'}
                />
            )}
            { props.content !== undefined && (
                <Text
                    name='Text'
                    fill={props.textColor || props.color?.text.accent || '#fff'}
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
                <Icon 
                    name='Leading Icon' svg={props.trailingIcon} size='medium'
                    fill={props.textColor || props.color?.text.accent || '#fff'}
                />
            )}
        </AutoLayout>
    )
}