// Imports
import { ColorPalette } from "../../../constants";
import { CheckedTask } from "./CheckedTask";
import { DefaultTask } from "./DefaultTask";
import { EditTask } from "./EditTask";

type Props = {
  type: "default" | "checked" | "edit";
  color?: ColorPalette;
  content: string;

  onMoveUp?: () => void | Promise<any>;
  onMoveDown?: () => void | Promise<any>;
  onClick?: () => void | Promise<any>;
};

export function TaskItem(props: Props) {
  switch (props.type) {
    case "default":
      return (
        <DefaultTask
          key={`default-${props.content}`}
          color={props.color}
          content={props.content}
          onClick={props.onClick}
          onMoveUp={props.onMoveUp}
          onMoveDown={props.onMoveDown}
        />
      );
    case "checked":
      return (
        <CheckedTask
          key={`checked-${props.content}`}
          color={props.color}
          content={props.content}
          onClick={props.onClick}
          onMoveUp={props.onMoveUp}
          onMoveDown={props.onMoveDown}
        />
      );
    case "edit":
      return (
        <EditTask
          key={`edit-${props.content}`}
          color={props.color}
          content={props.content}
          onClick={props.onClick}
        />
      );
  }
}
