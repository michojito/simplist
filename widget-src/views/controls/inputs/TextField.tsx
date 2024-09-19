const { widget } = figma
const {AutoLayout} = widget

// Imports
import { ColorPalette } from "../../../constants"
import { IconName } from "../../../models/IconLibrary"
import { DefaultTextField } from "./DefaultTextField"
import { PlaceholderTextField } from "./PlaceholderTextField"

type Props = {
    type: 'default' | 'placeholder'

    // Styling
    color?: ColorPalette

    onClick?: ((event: WidgetClickEvent) => void | Promise<any>)

    onAddTask?: (taskContent: string) => void
}
export function TextField (props: Props) {

    switch (props.type) {
        case 'default':
            return (
                <DefaultTextField color={props.color} onAddTask={props.onAddTask!}/>
            )
        case 'placeholder':
            return (
                <PlaceholderTextField color={props.color} />
            )
    }
}