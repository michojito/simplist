const { widget } = figma
const {AutoLayout, Text, Line} = widget

// Imports
import {ColorPalette, Font, Spacing } from "../../constants"
import { Icon } from "../Icon"

type Props = {
    title: string
    colors: ColorPalette
}

export function Header (props: Props) {
    
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
                <Icon svg='logo' name='Logo' fill={props.colors.accent.medium} size={'large'}/>
                <Text 
                    name='Title'
                    fill={props.colors.text.primary}
                    width='fill-parent'
                    fontFamily={Font.family}
                    fontSize={Font.heading.bolder.size}
                    fontWeight={Font.heading.bolder.weight}
                >
                    {props.title}
                </Text>
            </AutoLayout>
            <Line name='Separator' stroke={props.colors.neutrals.lowest} length='fill-parent' />
        </AutoLayout>
    )
}