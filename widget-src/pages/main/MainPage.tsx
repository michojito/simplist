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
    const newTask = {
      UUID: Date.now(),
      content: taskContent,
      checked: false,
      position: props.tasks.length, // New position at the end
      subtasks: [],
    };
    props.setTask((prevTasks) => [...prevTasks, newTask]);
  };

  const handleCheckTask = (taskUUID: number) => {
    props.setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.UUID === taskUUID ? { ...task, checked: !task.checked } : task
      )
    );
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
