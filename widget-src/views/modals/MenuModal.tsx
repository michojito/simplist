const { widget } = figma
const {Line} = widget

// Imports
import { ColorPalette, Spacing } from "../../constants";
import { Modal } from "../containers/Modal"
import { MenuItem } from "../controls/MenuItem";

type Props = {
    // Modal Positionning
    position?: "auto" | "absolute"
    y?: number | WidgetJSX.VerticalConstraint
    x?: number | WidgetJSX.HorizontalConstraint
    
    // Styling
    color: ColorPalette
    isHideCompleted: Boolean

    //Function
    onClick?: {
        Edit?: ((event: WidgetClickEvent) => void | Promise<any>),
        HideCompleted?: ((event: WidgetClickEvent) => void | Promise<any>),
        Infos?: ((event: WidgetClickEvent) => void | Promise<any>),
        Settings?: ((event: WidgetClickEvent) => void | Promise<any>),
        ClearAll?: ((event: WidgetClickEvent) => void | Promise<any>),
    }
}
export function MenuModal (props:Props) {

    return(
        <Modal
            position={props.position}
            y={props.y}
            x={props.x}
            fill={props.color.background.modal}
            stroke={props.color.neutrals.lowest}
            spacing={Spacing.xxs}
            padding={Spacing.s}
        >
            <MenuItem 
                key="edit"
                color={props.color}
                icon='checklist'
                content="Edit"
                onClick={props.onClick?.Edit}
            />
            <MenuItem 
                key="hideCompleted"
                color={props.color}
                icon='eye.cross'
                content={props.isHideCompleted ? "Show Completed" : "Hide Completed"}
                onClick={props.onClick?.HideCompleted}
            />
            <Line key="separator1" name='Separator' stroke={props.color.neutrals.lowest} length='fill-parent' />
            <MenuItem 
                key="info"
                color={props.color}
                icon='info.circle'
                content="Infos"
                onClick={props.onClick?.Infos}
            />
            <MenuItem 
                key="settings"
                color={props.color}
                icon='slider'
                content="Settings"
                onClick={props.onClick?.Settings}
            />
            <Line key="separator2" name='Separator' stroke={props.color.neutrals.lowest} length='fill-parent' />
            <MenuItem 
                key="clearAll"
                color={props.color}
                icon='trash'
                content="Clear all"
                danger
                onClick={props.onClick?.ClearAll}
            />
        </Modal>
    )
}