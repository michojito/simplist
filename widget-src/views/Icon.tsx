import { iconLibrary, IconName } from "../models/IconLibrary";

const { widget } = figma;
const { SVG } = widget;

type Props = {
  name: string;
  size?: { w: number; h: number } | "small" | "medium" | "large";
  svg: IconName;
  fill?: string;

  onClick?: (event: WidgetClickEvent) => void | Promise<any>;

  hoverStyle?: WidgetJSX.HoverStyle;
  opacity?: number;
};
export function Icon(props: Props) {
  var size: { w: number; h: number };

  if (props.size === "small") {
    size = { w: 16, h: 16 };
  } else if (props.size === "medium") {
    size = { w: 24, h: 24 };
  } else if (props.size === "large") {
    size = { w: 36, h: 36 };
  } else {
    size = { w: props.size?.w || 24, h: props.size?.h || 24 };
  }

  return (
    <SVG
      name={props.name}
      width={size.w}
      height={size.h}
      src={iconLibrary(props.svg, props.fill || "#000")}
      onClick={props.onClick}
      hoverStyle={props.hoverStyle}
      opacity={props.opacity}
    />
  );
}
