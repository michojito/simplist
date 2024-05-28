const { widget } = figma
const {useSyncedState, AutoLayout, Rectangle, Text} = widget
import { color, spacing, font, cornerRadius, shadeColor } from '../global'


enum Type {
    normal = 'default',
    error = 'error',
    ghost = 'ghost'
}

interface ButtonProps extends BaseProps, WidgetJSX.AutoLayoutSizeProps {
    type? : Type | String;
    children: FigmaDeclarativeNode | null;
    plainColor?: string
    href?: string
}

export function Button (props: ButtonProps) {

    switch (props.type) {

        case Type.ghost:
            return (
                <AutoLayout
                    name="ButtonTypeGhost"
                    overflow="visible"
                    horizontalAlignItems="center"
                    verticalAlignItems="center"
                    spacing={spacing.lower}
                    {...props}
                    
                >
                    <Rectangle name="Hover"  positioning="absolute" cornerRadius={cornerRadius.low}
                        width={28}
                        height={28}
                        x={{
                            type: "left-right",
                            leftOffset: -2,
                            rightOffset: -2,
                        }}
                        y={{
                            type: "top-bottom",
                            topOffset: -2,
                            bottomOffset: -2,
                        }}
                        hoverStyle={{
                            fill: `${color.greyVeryLow}`,
                          }}
                    />
                    {props.children}
                </AutoLayout>
            )

        case Type.error :
            return (
                <AutoLayout
                    name="ButtonTypeGhost"
                    overflow="visible"
                    horizontalAlignItems="center"
                    verticalAlignItems="center"
                    spacing={spacing.lower}
                    padding={spacing.lowest}
                    cornerRadius={cornerRadius.medium}
                    fill={color.white}
                    stroke={color.error}
                    {...props}
                    hoverStyle={{
                        opacity: 0.6
                      }}
                >
                    {props.children}
                </AutoLayout>
            )

        default :
            return (
                <AutoLayout
                    name="ButtonTypeGhost"
                    overflow="visible"
                    horizontalAlignItems="center"
                    verticalAlignItems="center"
                    spacing={spacing.lower}
                    padding={spacing.low2}
                    cornerRadius={cornerRadius.low}
                    fill={props.plainColor}
                    {...props}
                    hoverStyle={{
                        fill: `${shadeColor(props.plainColor || '#fff', -20)}`,
                      }}
                >
                    {props.children}
                </AutoLayout>
            )
    }
    
}