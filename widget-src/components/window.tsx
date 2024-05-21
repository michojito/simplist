const { widget } = figma
const {AutoLayout} = widget
import { color, spacing, cornerRadius } from '../global'

type Props = {
    direction: 'vertical' | 'horizontal'
    small?: boolean
    width?: number
    children: FigmaDeclarativeNode | null
  }

export function Window (props: Props) {
    return (
      <AutoLayout
        name='Main'
        effect={[
          {
            type: "drop-shadow",
            color: "#0000000D",
            offset: {
              x: 0,
              y: 8,
            },
            blur: 20,
            showShadowBehindNode:
              false,
          },
          {
            type: "drop-shadow",
            color: "#00000008",
            offset: {
              x: 0,
              y: 4,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          },
        ]}
        fill = {color.white}
        stroke = {color.greyVeryLow}
        cornerRadius={cornerRadius.high}
        direction={props.direction}
        spacing={spacing.medium}
        padding={props.small ? spacing.lowest : spacing.medium}
        width={props.width ? props.width : 393}
        verticalAlignItems="center"
        horizontalAlignItems="center"
      >
        {props.children}
      </AutoLayout>
    )
  }