const { widget } = figma;
const { AutoLayout } = widget;

// Imports
import { ColorPalette } from "../../../constants";
import { IconName } from "../../../models/IconLibrary";
import { DefaultTextField } from "./DefaultTextField";
import { OnlyTextField } from "./OnlyTextField";
import { PlaceholderTextField } from "./PlaceholderTextField";

type Props = {
  type: "default" | "placeholder" | "only";

  // Styling
  color?: ColorPalette;
  placeholder?: string;
  padding?: WidgetJSX.Padding;

  onClick?: (event: WidgetClickEvent) => void | Promise<any>;

  onAddTask?: (taskContent: string) => void;

  onTextEditEnd?: (e: any) => void;
};
export function TextField(props: Props) {
  switch (props.type) {
    case "default":
      return (
        <AutoLayout
          name="TextField"
          direction="horizontal"
          padding={props.padding ?? 0}
          width="fill-parent"
        >
          <DefaultTextField color={props.color} onAddTask={props.onAddTask!} />
        </AutoLayout>
      );
    case "placeholder":
      return (
        <AutoLayout
          name="TextField"
          direction="horizontal"
          padding={props.padding ?? 0}
          width="fill-parent"
        >
          <PlaceholderTextField color={props.color} />
        </AutoLayout>
      );
    case "only":
      return (
        <AutoLayout
          name="TextField"
          direction="horizontal"
          padding={props.padding ?? 0}
          width="fill-parent"
        >
          <OnlyTextField
            color={props.color}
            placeholder={props.placeholder}
            onTextEditEnd={props.onTextEditEnd}
          />
        </AutoLayout>
      );
  }
}
