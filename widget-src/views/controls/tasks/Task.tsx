// Imports
import { ColorPalette } from "../../../constants"
import { CheckedTask } from "./CheckedTask"
import { DefaultTask } from "./DefaultTask"
import { EditTask } from "./EditTask"

type Props = {
    type: 'default' | 'checked' | 'edit'
    color?: ColorPalette
    content: string
    onClick?: ((event: WidgetClickEvent) => void | Promise<any>)
}

export function TaskItem (props: Props) {
    switch (props.type) {
        case 'default':
            return (
                <DefaultTask color={props.color} content={props.content} onClick={props.onClick}/>
            )
        case 'checked':
            return (
                <CheckedTask color={props.color} content={props.content} onClick={props.onClick}/>
            )
        case 'edit':
            return (
                <EditTask color={props.color} content={props.content}/>
            )
    }
}