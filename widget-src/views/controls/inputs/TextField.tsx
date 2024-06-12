const { widget } = figma
const {AutoLayout} = widget

// Imports
import { ColorPalette } from "../../../constants"
import { IconName } from "../../../models/IconLibrary"
import { DefaultTextField } from "./DefaultTextField"

type Props = {
    type: 'default'

    // Styling
    color?: ColorPalette

    onClick?: ((event: WidgetClickEvent) => void | Promise<any>)
}
export function TextField (props: Props) {

    switch (props.type) {
        case 'default':
            return (
                <DefaultTextField color={props.color} />
            )
    }
}