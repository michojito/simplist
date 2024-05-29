// Imports
import { ColorPalette } from "../../constants";
import { IconName } from "../../models/IconLibrary";
import { GhostButton } from "./buttons/GhostButton";

type Props = {
    icon: IconName
    content: string
    danger?: boolean

    // Styling
    color?: ColorPalette

    onClick?: ((event: WidgetClickEvent) => void | Promise<any>)
}
export function MenuItem (props:Props) {
    return(
        <GhostButton 
            leadingIcon={props.icon}
            content={props.content}
            color={props.color}
            textColor={props.danger ? props.color?.danger.medium : props.color?.text.primary}
            width='fill-parent'
            onClick={props.onClick}
            leftaligned
        /> 
    )
}