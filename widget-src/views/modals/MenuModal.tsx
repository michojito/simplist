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
                color={props.color}
                icon='checklist'
                content="Edit"
                onClick={() => { console.log('click')}}
            />
            <MenuItem 
                color={props.color}
                icon='eye.cross'
                content="Hide Completed"
                onClick={() => { console.log('click')}}
            />
            <Line name='Separator' stroke={props.color.neutrals.lowest} length='fill-parent' />
            <MenuItem 
                color={props.color}
                icon='info.circle'
                content="Infos"
                onClick={() => { console.log('click')}}
            />
            <MenuItem 
                color={props.color}
                icon='slider'
                content="Settings"
                onClick={() => { console.log('click')}}
            />
            <Line name='Separator' stroke={props.color.neutrals.lowest} length='fill-parent' />
            <MenuItem 
                color={props.color}
                icon='trash'
                content="Clear all"
                danger
                onClick={() => { console.log('click')}}
            />
        </Modal>
    )
}