const { widget } = figma;
const { AutoLayout, Text } = widget;

// Import
import { ColorPalette, Font, Spacing } from "../../constants";
import { TextLibrary } from "../../models/TextLibrary";

// Views
import { Window } from "../../views/containers/Window";
import { TextField } from "../../views/controls/inputs/TextField";
import { Header } from "../../views/header/HeaderBase";
import { IlluEmptyBis } from "../../views/illustrations/IlluEmptyBis";

type Props = {
  color: ColorPalette;

  onMenu?: (event: WidgetClickEvent) => void | Promise<any>;

  handleAddTask: (taskContent: string) => void;
};

export function EmptyPage(props: Props) {
  return (
    <Window
      fill={props.color.background.primary}
      stroke={props.color.neutrals.lowest}
    >
      <Header title="Todo" color={props.color} onClick={props.onMenu} />

      <AutoLayout
        name="Content"
        direction="vertical"
        spacing={Spacing.xxl}
        width="fill-parent"
        horizontalAlignItems="center"
      >
        <TextField
          color={props.color}
          type="default"
          onAddTask={props.handleAddTask}
        />
        <AutoLayout
          name="Container"
          spacing={Spacing.m}
          width="fill-parent"
          verticalAlignItems="center"
        >
          <IlluEmptyBis
            colors={{
              primary: props.color.neutrals.higher,
              secondary: props.color.neutrals.medium,
              tertiary: props.color.neutrals.lower,
              quarternary: props.color.neutrals.lowest,
            }}
          />
          <AutoLayout
            name="Text"
            direction="vertical"
            spacing={Spacing.xxs}
            width="fill-parent"
            horizontalAlignItems="center"
          >
            <Text
              name="Title"
              fill={props.color.text.primary}
              width="fill-parent"
              fontFamily={Font.family}
              fontSize={Font.body.bolder.size}
              fontWeight={Font.body.bolder.weight}
              lineHeight={Font.body.bolder.lineHeight}
            >
              {TextLibrary.emptyPage.title}
            </Text>
            <Text
              name="Description"
              fill={props.color.text.secondary}
              width="fill-parent"
              fontFamily={Font.family}
              fontSize={Font.footnote.medium.size}
              fontWeight={Font.footnote.medium.weight}
              lineHeight={Font.footnote.medium.lineHeight}
            >
              {TextLibrary.emptyPage.description}
            </Text>
          </AutoLayout>
        </AutoLayout>
      </AutoLayout>
    </Window>
  );
}
