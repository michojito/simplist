const { widget } = figma
const {AutoLayout} = widget

// Imports
import { ColorPalette } from "../../../constants"
import { IconName } from "../../../models/IconLibrary"
import { GhostButton } from "./GhostButton"
import { PrimaryButton } from "./PrimaryButton"

type Props = {
    type: 'primary' | 'ghost' | 'mini-ghost'
    leadingIcon?: IconName
    content?: string
    trailingIcon?: IconName

    // Styling
    color?: ColorPalette
    textColor?: string
    fill?: string

    width?: WidgetJSX.AutolayoutSize
    height?: WidgetJSX.AutolayoutSize

    onClick?: ((event: WidgetClickEvent) => void | Promise<any>)
}
export function Button (props: Props) {
    
    switch (props.type) {
        case 'primary':
            return ( 
                <PrimaryButton 
                    leadingIcon={props.leadingIcon}
                    trailingIcon={props.trailingIcon}
                    content={props.content}
                    color={props.color}
                    fill={props.fill}
                    textColor={props.textColor}
                    width={props.width}
                    height={props.height}
                    onClick={props.onClick}
                /> 
            )
        case 'ghost':
            return ( 
                <GhostButton 
                    leadingIcon={props.leadingIcon}
                    trailingIcon={props.trailingIcon}
                    content={props.content}
                    color={props.color}
                    fill={props.fill}
                    textColor={props.textColor}
                    width={props.width}
                    height={props.height}
                    onClick={props.onClick}
                /> 
            )
        case 'mini-ghost':
            
    }
    
}