// Imports
import { ColorPalette } from "../../constants";
import { Modal } from "../containers/Modal"

type Props = {
    
    // Modal Positionning
    position?: "auto" | "absolute"
    y?: number | WidgetJSX.VerticalConstraint
    x?: number | WidgetJSX.HorizontalConstraint

    // Styling
    color: ColorPalette
}
export function InfoModal (props:Props) {

    return(
        <Modal
            position={props.position}
            y={props.y}
            x={props.x}
            fill={props.color.background.modal}
            stroke={props.color.neutrals.lowest}
        >

        </Modal>
    )
}