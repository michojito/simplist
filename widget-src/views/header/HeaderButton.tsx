const { widget } = figma
const {AutoLayout, Text, Line} = widget

// Imports
import {ColorPalette, Font, Spacing } from "../../constants"
import { Icon } from "../Icon"
import { Button } from "../controls/buttons/Button"

type Props = {
    title: string
    color: ColorPalette

    onClick?: ((event: WidgetClickEvent) => void | Promise<any>)
}

export function HeaderButton (props: Props) {
    
    return (
        <AutoLayout
            name='Header'
            direction='vertical'
            spacing={Spacing.m}
            width='fill-parent'
        >
            <AutoLayout
                name='Bar'
                spacing={Spacing.xxs}
                verticalAlignItems='center'
                width='fill-parent'
            >
                <Icon svg='logo' name='Logo' fill={props.color.accent.medium} size={'large'}/>
                <Text 
                    name='Title'
                    fill={props.color.text.primary}
                    width='fill-parent'
                    fontFamily={Font.family}
                    fontSize={Font.heading.bolder.size}
                    fontWeight={Font.heading.bolder.weight}
                >
                    {props.title}
                </Text>
                <Button type='ghost' content='done' textColor={props.color.accent.medium} color={props.color} onClick={props.onClick}/>
            </AutoLayout>
            <Line name='Separator' stroke={props.color.neutrals.lowest} length='fill-parent' />
        </AutoLayout>
    )
}