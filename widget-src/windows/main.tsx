const { widget } = figma
const { AutoLayout, Text } = widget
import { color, spacing, font, cornerRadius, Infos } from '../global'

//Components
import { Window } from "../components/window"
import { Heading } from '../components/heading'
import { Separator } from '../components/separator'
import { InputBar } from '../components/input'
import { TaskItem } from '../components/task'
import { Task } from '../class/Task'
import { EmptyState } from '../components/illustration'


interface Props {
    data: Task[]
    setData: (newValue: Task[] | ((currValue: Task[]) => Task[])) => void
    hasMenu: boolean
    setMenu: (newValue: boolean | ((currValue: boolean) => boolean)) => void
    hideCompleted: boolean
}

export function MainWindow (props : Props) {

    
    function checkTask (id: number) {
        let mapped = props.data.map( task => {
          return task.id == id ? {...task, check: !task.check} : {...task}
        });
        props.setData(mapped)
      }
    
      function openTask (id: number) {
        let mapped = props.data.map( task => {
          return task.id == id ? {...task, open: !task.open} : {...task}
        });
        props.setData(mapped)
      }
    return (
        <Window direction="vertical">
        <Heading title='Todo' onClick={() => props.setMenu(!props.hasMenu)}/>
        <Separator />
        <AutoLayout name="Content" direction="vertical"
          spacing={spacing.higher} horizontalAlignItems="center" width='fill-parent'>
            <InputBar data={props.setData}/>
            <AutoLayout name="Item List" direction="vertical" width='fill-parent' spacing={spacing.none}>
              {props.data === undefined || props.data.length == 0 ? (
                <EmptyState />
              ) : props.data.map( d => {
                    if (!props.hideCompleted) {
                        return (
                            <>
                                <TaskItem key={d.id} task={d} onClick={{
                                    check:() => {checkTask(d.id)},
                                    open:() => {openTask(d.id)},
                                  }} />
                                <Separator type='task' />
                            </>
                        )
                    }
                    if (!d.check) {
                        return (
                            <>
                                <TaskItem key={d.id} task={d} onClick={{
                                    check:() => {checkTask(d.id)},
                                    open:() => {openTask(d.id)},
                                  }} />
                                <Separator type='task' />
                            </>
                        )
                    }
              })}
            </AutoLayout>
        </AutoLayout>
      </Window>
    )
}