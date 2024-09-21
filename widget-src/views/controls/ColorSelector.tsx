const { widget } = figma
const {AutoLayout, Text, useSyncedState, useEffect} = widget

// Imports
import {ColorPalette, Font, Spacing } from "../../constants"

type Props = {
    color: string
    colors: ColorPalette

    onClick?: ((event: WidgetClickEvent) => void | Promise<any>)
}

export function ColorSelector (props: Props) {
    const isCurrentColor = props.colors.accent.medium === props.color

    
    return (
        <AutoLayout
            name='ModeSelector'
            direction='vertical'
            spacing={Spacing.xxs}
            horizontalAlignItems='center'
        >
            <AutoLayout
                name='Frame'
                cornerRadius={6}
                stroke={isCurrentColor ? props.colors.accent.medium : undefined}
                strokeWidth={1}
                padding={2}
                hoverStyle={{
                    stroke: props.colors?.neutrals.lower
                }}
                onClick={props.onClick}
            >
                <AutoLayout 
                    name="Option"
                    fill={props.color}
                    cornerRadius={4}
                    width={48}
                    height={48}
                />
            </AutoLayout>
        </AutoLayout>
    )
}