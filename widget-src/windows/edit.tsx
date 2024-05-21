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
    accentColor: {
        content: {main: string;text: string;}
        set: (newValue: { main: string; text: string;} | ((currValue: {main: string;text: string;}) => {main: string;text: string;})) => void}
    data: {
        content: Task[],
        set: (newValue: Task[] | ((currValue: Task[]) => Task[])) => void
    }
    isEditOpen: {
        content : boolean,
        set: (newValue: boolean | ((currValue: boolean) => boolean)) => void
    }
}

export function EditWindow (props: Props) {

    function deleteTask (id: number) {
        let filtered = props.data.content.filter(task => {
            return task.id !== id
        })
        props.data.set(filtered)
    }

    function setAccent(color: string) : string{
        if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
          props.accentColor.set({main: color, text: '#fff'})
        }
        return props.accentColor.content.main
      }

    const [text, setText] = useSyncedState("accentColorChange", props.accentColor.content.main)

    return (
        <Window direction="vertical">
            <EditHeading accentColor={props.accentColor.content} title='Todo' onClick={() => {props.isEditOpen.set(!props.isEditOpen.content);}} />
            <Separator />
            <AutoLayout name="Content" direction="vertical"
                spacing={spacing.higher} horizontalAlignItems="center" width='fill-parent'>

                <AutoLayout name='Accent Color' spacing={spacing.lowest} width='fill-parent' verticalAlignItems="center">
                    <AutoLayout name='Text Container' width='fill-parent' spacing={spacing.lower}>
                        <Text fontSize={font.body} fontWeight={500} fill={color.text}>Accent Color</Text>

                        <Input value={text} placeholder={props.accentColor.content.main} width='fill-parent' fontSize={font.body} fill={color.greyLow}
                        onTextEditEnd={(e) => { setText(e.characters); setAccent(e.characters)}} placeholderProps={{opacity: 1}} />
                    </AutoLayout>
                    <Button plainColor={props.accentColor.content.main}><Frame width={24} height={24}/></Button>
                </AutoLayout>

                <AutoLayout name="Item List" direction="vertical" width='fill-parent' spacing={spacing.none}>
                    {props.data.content.map( d => {
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