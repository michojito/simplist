const { widget } = figma
const {AutoLayout, Text, useSyncedState, useEffect} = widget

// Imports
import {ColorPalette, Font, Spacing } from "../../constants"
import { IlluDark } from "../illustrations/IlluDark"
import { IlluLight } from "../illustrations/IlluLight"

type Props = {
    color: ColorPalette
    mode: 'Light' | 'Dark'
    lightMode: boolean

    onClick?: ((event: WidgetClickEvent) => void | Promise<any>)
}

export function ModeSelector (props: Props) {
    const [active, setActive] = useSyncedState("active", false)

    
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
                stroke={undefined}
                padding={2}
                hoverStyle={{
                    stroke: props.color?.neutrals.lower
                }}
                onClick={props.onClick}
            >
            
            {props.mode === 'Light' ? (
                <IlluLight 
                    width={80}
                    height={60}
                    accent={props.color.accent.medium}
                />
            ) : (
                <IlluDark 
                    width={80}
                    height={60}
                    accent={props.color.accent.medium}
                />
            )}
                
            </AutoLayout>
            <Text
                name='Caption'
                fontFamily={Font.family}
                fontSize={Font.footnote.medium.size}
                fontWeight={Font.footnote.medium.weight}
                lineHeight={Font.footnote.medium.lineHeight}
                fill={props.color?.text.secondary}
            >
                {props.mode}
            </Text>

        </AutoLayout>
    )
}