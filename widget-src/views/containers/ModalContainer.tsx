const { widget } = figma
const {AutoLayout} = widget

// Imports
import { ColorPalette } from "../../constants";
import { MenuModal } from "../modals/MenuModal";
import { InfoModal } from "../modals/InfoModal";

type Props = {
    color: ColorPalette
    children?: FigmaDeclarativeNode
}
export function ModalContainer (props: Props) {
    
    return (
        <AutoLayout name='Widget' overflow='visible'>
            {props.children}
            <MenuModal position='absolute'
                x={{ type:'right', offset: -202 }} y={64}
                color={props.color}
            />
            <InfoModal position='absolute'
                x={{ type:'left', offset: -266 }} y={0}
                color={props.color}
            />
        </AutoLayout>
    )
}