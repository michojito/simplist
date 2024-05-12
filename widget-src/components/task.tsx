const { widget } = figma
const {useSyncedState, AutoLayout, Text} = widget

import { Task } from "../class/Task";
import { spacing, color, cornerRadius, font } from "../global"
import { Button } from "./button";
import { Checkmark, Plus, TrashOutline } from "./icons";

interface Props {
    task: Task
    onClick?: {
        check?: (event: WidgetClickEvent) => Promise<any> | void,
        open?: (event: WidgetClickEvent) => Promise<any> | void,
        addSubtask?: (event: WidgetClickEvent) => Promise<any> | void,
    }
}

export function TaskItem (props: Props) {

    return (
        <AutoLayout name='Task' spacing={spacing.lower} width='fill-parent' padding={{vertical:spacing.low, horizontal:spacing.none}} >
            <Checkbox completed={props.task.check} onClick={props.onClick!.check || undefined}/>
            <AutoLayout name="Content" direction="vertical" spacing={spacing.lower} verticalAlignItems="center" width='fill-parent' overflow="visible">
                <AutoLayout name="Heading" spacing={spacing.lower} verticalAlignItems="center" width='fill-parent' onClick={props.onClick!.open || undefined}>
                    <Text
                        fontSize={font.body}
                        fontWeight={500}
                        fill={props.task.check ? color.greyLow : color.text}
                        textDecoration={props.task.check ? 'strikethrough' : 'none'}
                    >
                        {props.task.content}
                    </Text>
                </AutoLayout>
                { props.task.open && !props.task.check && (
                    <AutoLayout name='Meta' spacing={spacing.lower} width="fill-parent" verticalAlignItems="center" overflow="visible">
                        <Button type='ghost' onClick={ props.onClick!.addSubtask || undefined }>
                            <Plus color={color.greyLow} size={[16,16]} />
                            <Text fill={color.greyLow} fontSize={font.footnote} fontWeight={500}>Add Subtask</Text>
                        </Button>
                    </AutoLayout>
                )}
            </AutoLayout>
        </AutoLayout>
    )
}

interface EditProps {
    task: Task
    onClick?: (event: WidgetClickEvent) => Promise<any> | void
}
export function EditTaskItem (props: EditProps) {

    return (
        <AutoLayout name='Task' spacing={spacing.lower} width='fill-parent' padding={{vertical:spacing.low, horizontal:spacing.none}} >
            <Button type='error' onClick={props.onClick}><TrashOutline color={color.error} size={[16,16]}/></Button>
            <AutoLayout name="Content" direction="vertical" spacing={spacing.lower} verticalAlignItems="center" width='fill-parent' overflow="visible">
                <AutoLayout name="Heading" spacing={spacing.lower} verticalAlignItems="center" width='fill-parent'>
                    <Text
                        fontSize={font.body}
                        fontWeight={500}
                        fill={props.task.check ? color.greyLow : color.text}
                        textDecoration={props.task.check ? 'strikethrough' : 'none'}
                    >
                        {props.task.content}
                    </Text>
                </AutoLayout>
            </AutoLayout>
        </AutoLayout>
    )
}

interface CheckProps {
    completed: boolean
    onClick?: (event: WidgetClickEvent) => Promise<any> | void
}

function Checkbox (props: CheckProps) {

    return (
        <AutoLayout
            name="Checkbox"
            fill={props.completed ? color.greyVeryLow : color.white}
            stroke={props.completed ? color.greyLow : color.accent}
            cornerRadius={cornerRadius.low}
            strokeWidth={2}
            width={24}
            height={24}
            horizontalAlignItems="center"
            verticalAlignItems="center"
            onClick={props.onClick}
            hoverStyle={{
                opacity: 0.6,
              }}
        >
            {props.completed && (
                <Checkmark color={color.greyLow} />
            )}
        </AutoLayout>
        
    )
}