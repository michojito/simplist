const { widget } = figma
const {AutoLayout, Line} = widget

import { ColorPalette, Font, Spacing } from "../../constants";

type Props = {
    color?: ColorPalette
}

export function Separator (props: Props) {
    return (
        <AutoLayout
          name="SeparatorListTrue"
          overflow="visible"
          spacing={10}
          padding={{
            top: Spacing.xs,
            right: 0,
            bottom: Spacing.xs,
            left: Spacing.xxl,
          }}
          width="fill-parent"
          horizontalAlignItems="end"
          verticalAlignItems="center"
        >
          <Line
            name="Line"
            stroke={props.color?.neutrals.lowest || "#F0F2F3"}
            length="fill-parent"
          />
        </AutoLayout>
      );
}