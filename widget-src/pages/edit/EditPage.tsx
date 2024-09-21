const { widget } = figma
const {AutoLayout, Text} = widget

// Import
import { ColorPalette, Font, Spacing } from "../../constants";
import { TextLibrary } from "../../models/TextLibrary";

// Views
import { Window } from "../../views/containers/Window";
import { TextField } from "../../views/controls/inputs/TextField";
import { TaskItem } from "../../views/controls/tasks/Task";
import { HeaderButton } from "../../views/header/HeaderButton";
import { Separator } from "../../views/illustrations/Separator";

type TaskType = {
    UUID: number;
    content: string;
    checked: boolean;
    subtasks: TaskType[];
};

type Props = {
    // Modal State
    ModalState: boolean
    setModalState: (newValue: boolean | ((currValue: boolean) => boolean)) => void


    // Features
    color: ColorPalette
    isHideCompleted: Boolean
    tasks: TaskType[]
    setTask: (newValue: TaskType[] | ((currValue: TaskType[]) => TaskType[])) => void
    
}

export function EditPage (props: Props) {
    const handleDeleteTask = (taskUUID: number) => {
        props.setTask(prevTasks => prevTasks.filter(task => task.UUID !== taskUUID));
    }

    return (
        <Window fill={props.color.background.primary} stroke={props.color.neutrals.lowest}>
            <HeaderButton title='Edit' color={props.color} onClick={() => {props.setModalState(false)}}/>

            <AutoLayout
                name='Content'
                direction='vertical'
                spacing={Spacing.xxl}
                width='fill-parent'
                horizontalAlignItems='center'
            >
                <TextField color={props.color} type='placeholder' />
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
                                    key={task.UUID}
                                    name='Item'
                                    spacing={Spacing.s}
                                    width='fill-parent'
                                    direction='vertical'
                                    verticalAlignItems='center'
                                >
                                    <TaskItem
                                        key={`task-${task.UUID}`}
                                        type={'edit'}
                                        color={props.color}
                                        content={task.content}
                                        onClick={() => handleDeleteTask(task.UUID)}
                                    />
                                    <Separator key={`separator-${task.UUID}`} color={props.color} />
                                </AutoLayout>
                            )
                        } else if (!props.isHideCompleted) {
                            return (
                                <AutoLayout
                                    key={task.UUID}
                                    name='Item'
                                    spacing={Spacing.s}
                                    width='fill-parent'
                                    direction='vertical'
                                    verticalAlignItems='center'
                                >
                                    <TaskItem
                                        key={`task-${task.UUID}`}
                                        type={'edit'}
                                        color={props.color}
                                        content={task.content}
                                        onClick={() => handleDeleteTask(task.UUID)}
                                    />
                                    <Separator key={`separator-${task.UUID}`} color={props.color} />
                                </AutoLayout>
                            )
                        }
                    })}
                </AutoLayout>
            </AutoLayout>
        </Window>
    )
}