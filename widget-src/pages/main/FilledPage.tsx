const { widget } = figma
const { AutoLayout, Text } = widget

// Import
import { ColorPalette, Font, Spacing } from "../../constants";
import { TextLibrary } from "../../models/TextLibrary";

// Views
import { Window } from "../../views/containers/Window";
import { TextField } from "../../views/controls/inputs/TextField";
import { TaskItem } from "../../views/controls/tasks/Task";
import { Header } from "../../views/header/HeaderBase";
import { Separator } from "../../views/illustrations/Separator";

type Props = {
    color: ColorPalette
    onMenu?: ((event: WidgetClickEvent) => void | Promise<any>)
    tasks: Task[]
    handleAddTask: (taskContent: string) => void
    handleCheckTask: (taskUUID: number) => void

    isHideCompleted: Boolean
}

export function FilledPage(props: Props) {


    return (
        <Window fill={props.color.background.primary} stroke={props.color.neutrals.lowest}>
            <Header title='Todo' color={props.color} onClick={props.onMenu} />

            <AutoLayout
                name='Content'
                direction='vertical'
                spacing={Spacing.xxl}
                width='fill-parent'
                horizontalAlignItems='center'
            >
                <TextField color={props.color} type='default' onAddTask={props.handleAddTask} />
                <AutoLayout
                    name='List'
                    spacing={Spacing.s}
                    width='fill-parent'
                    direction='vertical'
                    verticalAlignItems='center'
                >
                    {props.tasks.map(task => {
                        if (props.isHideCompleted && !task.checked) {
                            return (
                                <AutoLayout
                                    name='Item'
                                    spacing={Spacing.s}
                                    width='fill-parent'
                                    direction='vertical'
                                    verticalAlignItems='center'
                                >
                                    <TaskItem
                                        key={task.UUID}
                                        type={task.checked ? 'checked' : 'default'}
                                        color={props.color}
                                        content={task.content}
                                        onClick={() => props.handleCheckTask(task.UUID)}
                                    />
                                    <Separator color={props.color} />
                                </AutoLayout>
                            )
                        } else if (!props.isHideCompleted) {
                            return (
                                <AutoLayout
                                    name='Item'
                                    spacing={Spacing.s}
                                    width='fill-parent'
                                    direction='vertical'
                                    verticalAlignItems='center'
                                >
                                    <TaskItem
                                        key={task.UUID}
                                        type={task.checked ? 'checked' : 'default'}
                                        color={props.color}
                                        content={task.content}
                                        onClick={() => props.handleCheckTask(task.UUID)}
                                    />
                                    <Separator color={props.color} />
                                </AutoLayout>
                            )
                        }
                    })}
                </AutoLayout>
            </AutoLayout>
        </Window>
    )
}