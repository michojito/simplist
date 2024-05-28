const { widget } = figma
const { AutoLayout, Text } = widget


//Components
import { Task } from "../class/Task"

import { Window } from "../components/window"
import { Separator } from "../components/separator"
import { Heading } from "../components/heading"
import { InputBar } from "../components/input"
import { spacing } from "../global"
import { EmptyState } from "../components/illustration"
import { TaskItem } from "../components/task"




interface Props {
  data: {
    content: Task[],
    set: (newValue: Task[] | ((currValue: Task[]) => Task[])) => void
  }
  accentColor: {main: string; text: string;}
  isSettingsOpen:{
    content: boolean, 
    set: (newValue: boolean | ((currValue: boolean) => boolean)) => void
  }
  isHideCompleted: boolean

}

export function MainWindow (props : Props) {

  function checkTask (id: number) {
    let mapped = props.data.content.map( task => {
      return task.id == id ? {...task, check: !task.check} : {...task}
    });
    props.data.set(mapped)
  }

  return (
    <Window direction="vertical">
      <Heading title='Todo' accentColor={props.accentColor} 
        onClick={ () => props.isSettingsOpen.set(!props.isSettingsOpen.content)}/>
      <Separator />
      <AutoLayout name='Content' direction='vertical' horizontalAlignItems='center' width='fill-parent' spacing={spacing.higher}>
        <InputBar  accentColor={props.accentColor} data={props.data.set}/>
        <AutoLayout name='Item List' direction='vertical' width='fill-parent' spacing={spacing.none}>
          {
            // If list is Empty
            props.data === undefined || props.data.content.length == 0 ? (
              <EmptyState/>
            ) : props.data.content.map( d => {

                // If hideCompleted is not checked return ckecked task
                if (!props.isHideCompleted) {
                  return (
                    <>
                      <TaskItem key={d.id} task={d} accentColor={props.accentColor}
                        onClick={{
                          check:() => {checkTask(d.id)}
                          }}/>
                      <Separator key={`separator-${d.id}`} type='task' />
                    </>
                  )
                }
                // return unchecked task
                if (!d.check) {
                  return (
                    <>
                      <TaskItem key={d.id} task={d} accentColor={props.accentColor}
                        onClick={{
                          check:() => {checkTask(d.id)}
                          }}/>
                      <Separator key={`separator-${d.id}`} type='task' />
                    </>
                  )
                }
                
            })
          }
        </AutoLayout>
      </AutoLayout>
    </Window>
  )
}