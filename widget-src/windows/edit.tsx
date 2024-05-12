const { widget } = figma
const { useSyncedState, AutoLayout, Text, Frame, Input, useEffect } = widget

import { Task } from "../class/Task";
import { Button } from "../components/button";
import { EditHeading } from "../components/heading";
import { Separator } from "../components/separator";
import { EditTaskItem, TaskItem } from "../components/task";
import { Window } from "../components/window";
import { color, font, spacing } from "../global";


interface Props {
    data: Task[]
    setData: (newValue: Task[] | ((currValue: Task[]) => Task[])) => void
    isEdit: boolean
    setEdit: (newValue: boolean | ((currValue: boolean) => boolean)) => void
}

export function EditWindow (props: Props) {

    function deleteTask (id: number) {
        let filtered = props.data.filter(task => {
            return task.id !== id
        })
        props.setData(filtered)
    }

    const [text, setText] = useSyncedState("accentColorChange", color.accent)

    return (
        <Window direction="vertical">
            <EditHeading title='Todo' onClick={() => {props.setEdit(!props.isEdit); color.setAccent(text)}} />
            <Separator />
            <AutoLayout name="Content" direction="vertical"
                spacing={spacing.higher} horizontalAlignItems="center" width='fill-parent'>

                <AutoLayout name='Accent Color' spacing={spacing.lowest} width='fill-parent' verticalAlignItems="center">
                    <AutoLayout name='Text Container' width='fill-parent' spacing={spacing.lower}>
                        <Text fontSize={font.body} fontWeight={500} fill={color.text}>Accent Color</Text>

                        <Input value={text} placeholder={color.accent} width='fill-parent' fontSize={font.body} fill={color.greyLow}
                        onTextEditEnd={(e) => { setText(e.characters); color.setAccent(e.characters);}} placeholderProps={{opacity: 1}} />
                    </AutoLayout>
                    <Button><Frame width={24} height={24}/></Button>
                </AutoLayout>

                <AutoLayout name="Item List" direction="vertical" width='fill-parent' spacing={spacing.none}>
                    {props.data.map( d => {
                        return (
                            <>
                                <EditTaskItem key={d.id} task={d} onClick={ () => {deleteTask(d.id)} } />
                                <Separator type='task' />
                            </>
                        )
                    })}
                </AutoLayout>

          </AutoLayout>
        </Window>
    )
}