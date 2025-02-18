import { ColorPalette } from "../../constants";
import { EmptyPage } from "./EmptyPage";
import { FilledPage } from "./FilledPage";
import { Task } from "../../models/Task";

type Props = {
  color: ColorPalette;

  tasks: Task[];
  setTask: (newValue: Task[] | ((currValue: Task[]) => Task[])) => void;

  isHideCompleted: Boolean;

  // Modals
  menuOpen: boolean;
  setMenuOpen: (newValue: boolean | ((currValue: boolean) => boolean)) => void;
};

export function MainPage(props: Props) {
  const handleAddTask = (taskContent: string) => {
    const task = new Task(taskContent, props.tasks.length);
    props.setTask((prevTasks) => [...prevTasks, task]);
  };

  const handleCheckTask = (taskUUID: number) => {
    console.log("Checking task:", taskUUID); // Ajoutons des logs pour debug
    props.setTask((prevTasks) => {
      console.log("Previous tasks:", prevTasks);
      const newTasks = prevTasks.map((task) =>
        task.UUID === taskUUID ? { ...task, checked: !task.checked } : task
      );
      console.log("New tasks:", newTasks);
      return newTasks;
    });
  };

  const handleMoveTask = (index: number, direction: "up" | "down") => {
    props.setTask((prevTasks) => {
      const newTasks = [...prevTasks];
      if (direction === "up" && index > 0) {
        [newTasks[index], newTasks[index - 1]] = [
          newTasks[index - 1],
          newTasks[index],
        ];
      } else if (direction === "down" && index < newTasks.length - 1) {
        [newTasks[index], newTasks[index + 1]] = [
          newTasks[index + 1],
          newTasks[index],
        ];
      }
      return newTasks;
    });
  };

  if (props.tasks.length === 0) {
    return (
      <EmptyPage
        color={props.color}
        onMenu={() => {
          props.setMenuOpen(!props.menuOpen);
        }}
        handleAddTask={handleAddTask}
      />
    );
  } else {
    return (
      <FilledPage
        color={props.color}
        onMenu={() => {
          props.setMenuOpen(!props.menuOpen);
        }}
        tasks={props.tasks}
        handleAddTask={handleAddTask}
        handleCheckTask={handleCheckTask}
        handleMoveTask={handleMoveTask}
        isHideCompleted={props.isHideCompleted}
      />
    );
  }
}
