const { widget } = figma;
const { AutoLayout, Text } = widget;

//Imports
import { CornerRadius, Spacing, Font, ColorPalette } from "../../../constants";
import { Icon } from "../../Icon";

type Props = {
  // Styling
  color?: ColorPalette;
  content: string;

  onClick?: (event: WidgetClickEvent) => void | Promise<any>;
  onMoveUp?: () => void | Promise<any>;
  onMoveDown?: () => void | Promise<any>;
};

export function DefaultTask(props: Props) {
  return (
    <AutoLayout
      name="Task"
      width="fill-parent"
      direction="horizontal"
      verticalAlignItems="center"
      spacing={Spacing.xxs}
      padding={{
        top: Spacing.none,
        bottom: Spacing.none,
        left: Spacing.xxs,
        right: Spacing.l,
      }}
    >
      <AutoLayout
        name="Move-Button"
        direction="vertical"
        verticalAlignItems="center"
        spacing={Spacing.xxs}
      >
        <Icon
          svg="chevron.up"
          name="Up"
          fill={props.color?.neutrals.low}
          size={"small"}
          onClick={props.onMoveUp}
          opacity={0}
          hoverStyle={{
            opacity: 1,
          }}
        />
        <Icon
          svg="chevron.down"
          name="down"
          fill={props.color?.neutrals.low}
          size={"small"}
          onClick={props.onMoveDown}
          opacity={0}
          hoverStyle={{
            opacity: 1,
          }}
        />
      </AutoLayout>
      <AutoLayout
        name="Container"
        width="fill-parent"
        direction="horizontal"
        spacing={Spacing.s}
      >
        <AutoLayout
          name="Checkbox"
          fill={props.color?.background.primary}
          stroke={props.color?.accent.medium}
          strokeWidth={2}
          cornerRadius={CornerRadius.s}
          width={Spacing.l}
          height={Spacing.l}
          horizontalAlignItems="center"
          verticalAlignItems="center"
          hoverStyle={{
            fill: props.color?.background.secondary,
            stroke: props.color?.accent.high,
          }}
          onClick={props.onClick}
        />

        <AutoLayout
          name="Content"
          direction="vertical"
          width="fill-parent"
          spacing={Spacing.xs}
        >
          <Text
            name="Title"
            width="fill-parent"
            fontFamily={Font.family}
            fontSize={Font.body.medium.size}
            fontWeight={Font.body.medium.weight}
            lineHeight={Font.body.medium.lineHeight}
            fill={props.color?.text.primary}
          >
            {props.content}
          </Text>
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  );
}
