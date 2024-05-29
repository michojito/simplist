const { widget } = figma
const {AutoLayout} = widget

// Imports
import { CornerRadius, Spacing } from "../../constants"

type Props = {
    name?: string

    // Styling
    padding?: WidgetJSX.Padding
    spacing?: number | WidgetJSX.LayoutGap
    width?: WidgetJSX.AutolayoutSize
    fill?: string | WidgetJSX.Color | WidgetJSX.Paint | (WidgetJSX.SolidPaint | WidgetJSX.GradientPaint)[]
    stroke?: string | WidgetJSX.Color | WidgetJSX.SolidPaint | WidgetJSX.GradientPaint | (WidgetJSX.SolidPaint | WidgetJSX.GradientPaint)[]

    // Positionning
    position?: "auto" | "absolute"
    y?: number | WidgetJSX.VerticalConstraint
    x?: number | WidgetJSX.HorizontalConstraint

    children?: FigmaDeclarativeNode
}

export function Modal (props: Props) {

    return (
        <AutoLayout
            name={props.name || 'Modal'}
            effect= {[
                {
                    type  : 'drop-shadow',
                    color : '#0000000D',
                    offset: {x: 0, y: 8},
                    blur  : 20,
                    blendMode: 'normal',
                    spread: 0,
                    visible: true,
                    showShadowBehindNode: false,
                },
                {
                    type  : 'drop-shadow',
                    color : '#00000008',
                    offset: {x: 0, y: 4},
                    blur  : 4,
                    blendMode: 'normal',
                    spread: 0,
                    visible: true,
                    showShadowBehindNode: false,
                },
            ]}
            fill={props.fill || '#FFF'}
            stroke={props.stroke || '#EFEFEF'}
            cornerRadius={CornerRadius.l}
            spacing={props.spacing || Spacing.m}
            padding={props.padding || Spacing.l}
            width={props.width || 250}
            minHeight={24}
            direction='vertical'
            verticalAlignItems='center'
            horizontalAlignItems='center'

            positioning={props.position}
            y={props.y}
            x={props.x}
        >
            {props.children}
        </AutoLayout>
    )
}