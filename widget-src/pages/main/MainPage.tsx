import { ColorPalette } from "../../constants";
import { EmptyPage } from "./EmptyPage";
import { FilledPage } from "./FilledPage";

type TaskType = {
    UUID: number;
    content: string;
    checked: boolean;
    subtasks: TaskType[];
};

type Props = {
    color: ColorPalette

    tasks: TaskType[]
    setTask: (newValue: TaskType[] | ((currValue: TaskType[]) => TaskType[])) => void

    isHideCompleted: Boolean

    // Modals
    menuOpen: boolean
    setMenuOpen: (newValue: boolean | ((currValue: boolean) => boolean)) => void

}

export function MainPage (props: Props) {

    const handleAddTask = (taskContent: string) => {
        const newTask = {
            UUID: Date.now(),
            content: taskContent,
            checked: false,
            subtasks: []
        };
        props.setTask(prevTasks => [...prevTasks, newTask]);
    }
    const handleCheckTask = (taskUUID: number) => {
        props.setTask(prevTasks => 
            prevTasks.map(task => 
                task.UUID === taskUUID ? { ...task, checked: !task.checked } : task
            )
        );
    }
    
    if (props.tasks.length === 0) {
        return (
            <EmptyPage 
                color={props.color} 
                onMenu={() => {
                    props.setMenuOpen(!props.menuOpen)
                }}
                handleAddTask={handleAddTask}
            />
        )
    } else {
        return (
            <FilledPage 
                color={props.color}
                onMenu={() => {
                    props.setMenuOpen(!props.menuOpen)
                }}
                tasks={props.tasks}
                handleAddTask={handleAddTask}
                handleCheckTask={handleCheckTask}
                isHideCompleted={props.isHideCompleted}
            />
        )
    }
}