import { CornerRadius, Spacing } from "../../constants"

const { widget } = figma
const {AutoLayout} = widget

type Props = {
    name?: string
    padding?: WidgetJSX.Padding
    spacing?: number | WidgetJSX.LayoutGap
    width?: WidgetJSX.AutolayoutSize
    fill?: string | WidgetJSX.Color | WidgetJSX.Paint | (WidgetJSX.SolidPaint | WidgetJSX.GradientPaint)[]
    stroke?: string | WidgetJSX.Color | WidgetJSX.SolidPaint | WidgetJSX.GradientPaint | (WidgetJSX.SolidPaint | WidgetJSX.GradientPaint)[]
    children?: FigmaDeclarativeNode
}

export function Window (props: Props) {

    return (
        <AutoLayout
            name={props.name || 'Main'}
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
            fill={props.fill}
            stroke={props.stroke || '#EFEFEF'}
            cornerRadius={CornerRadius.l}
            spacing={props.spacing || Spacing.m}
            padding={props.padding || Spacing.l}
            width={props.width || 393}
            minHeight={24}
            verticalAlignItems='center'
            horizontalAlignItems='center'
        >
            {props.children}
        </AutoLayout>
    )
}