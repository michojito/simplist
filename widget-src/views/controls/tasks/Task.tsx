// Imports
import { ColorPalette } from "../../../constants"
import { CheckedTask } from "./CheckedTask"
import { DefaultTask } from "./DefaultTask"
import { EditTask } from "./EditTask"

type Props = {
    type: 'default' | 'checked' | 'edit'

    // Styling
    color?: ColorPalette

    onClick?: ((event: WidgetClickEvent) => void | Promise<any>)
}
export function TextField (props: Props) {

    switch (props.type) {
        case 'default':
            return (
                <DefaultTask color={props.color} content="Test"/>
            )

        case 'checked':
            return (
                <CheckedTask color={props.color} content="Test"/>
            )

        case 'edit':
            return (
                <EditTask color={props.color} content="Test"/>
            )
    }
}