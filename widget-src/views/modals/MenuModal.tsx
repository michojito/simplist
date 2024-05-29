import { Modal } from "../containers/Modal"

type Props = {
    
    // Modal Positionning
    position?: "auto" | "absolute"
    y?: number | WidgetJSX.VerticalConstraint
    x?: number | WidgetJSX.HorizontalConstraint
}
export function MenuModal (props:Props) {

    return(
        <Modal
            position={props.position}
            y={props.y}
            x={props.x}
        >

        </Modal>
    )
}