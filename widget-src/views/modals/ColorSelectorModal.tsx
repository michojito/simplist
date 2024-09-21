const { widget } = figma
const {AutoLayout} = widget

import { Modal } from "../containers/Modal"
import { Colors, ColorPalette, Spacing } from "../../constants"
import { TextField } from "../controls/inputs/TextField"
import { ColorSelector } from "../controls/ColorSelector"

type Props = {
    
    // Modal Positionning
    position?: "auto" | "absolute"
    y?: number | WidgetJSX.VerticalConstraint
    x?: number | WidgetJSX.HorizontalConstraint

    //styling
    color: ColorPalette

    onColorChange: (color: string) => void
}

export function ColorSelectorModal (props:Props) {
    const colors = [
        Colors.accent.blue,
        Colors.accent.orange,
        Colors.accent.yellow,
        Colors.accent.green,
        Colors.accent.purple,
        Colors.accent.red,
        Colors.accent.gray,
        Colors.accent.black,
    ]

    const handleColorSelect = (color: string) => {
        props.onColorChange(color);
    }

    const handleTextFieldChange = (text: string) => {
        if (/^#[0-9A-Fa-f]{6}$/.test(text)) {
            props.onColorChange(text);
        }
    }

    return(
        <Modal
            position={props.position}
            y={props.y}
            x={props.x}
            padding={Spacing.xs}
            width={225}
            fill={props.color.background.modal}
        >
            <AutoLayout
                name="ColorSelector"
                direction="vertical"
                horizontalAlignItems="center"
                width="fill-parent"
                spacing={Spacing.xs}
            >
                <AutoLayout
                    name="Options"
                    width="fill-parent"
                    direction='horizontal'
                    wrap={true}
                    horizontalAlignItems="center"
                >
                    {colors.map(color => (
                        <ColorSelector 
                            key={color}
                            color={color} 
                            colors={props.color} 
                            onClick={() => handleColorSelect(color)}
                        />
                    ))}
                </AutoLayout>
                <TextField 
                    color={props.color} 
                    placeholder={props.color.accent.medium} 
                    type='only'
                    onTextEditEnd={(e) => handleTextFieldChange(e.characters)}
                />
            </AutoLayout>
        </Modal>
    )
}
