const { widget } = figma;
const { AutoLayout, Text, Input, useSyncedState, useEffect } = widget;

// Import
import { ColorPalette, Spacing, Font } from "../../constants";
import { TextLibrary } from "../../models/TextLibrary";
import { parseInput } from "../../utils";
import { Window } from "../../views/containers/Window";
import { Button } from "../../views/controls/buttons/Button";
import { HeaderPower } from "../../views/header/HeaderPower";
import { Task } from "../../models/Task";

type Props = {
  color: ColorPalette;
  tasks: Task[];
  setTasks: (newValue: Task[] | ((currValue: Task[]) => Task[])) => void;
  ModalState: boolean;
  setModalState: (
    newValue: boolean | ((currValue: boolean) => boolean)
  ) => void;
};

export function PowerModePage(props: Props) {
  const [inputText, setInputText] = useSyncedState("powerModeInput", "");
  const [isInitialized, setIsInitialized] = useSyncedState(
    "powerModeInitialized",
    false
  );

  useEffect(() => {
    if (!isInitialized && props.tasks.length > 0) {
      const newTaskText = props.tasks
        .map((task) => `${task.checked ? "[x]" : "[]"} ${task.content}`)
        .join("\n");
      setInputText(newTaskText);
      setIsInitialized(true);
    }
  });

  const handleTextEditEnd = (e: { characters: string }) => {
    setInputText(e.characters);
  };

  const handleSave = () => {
    try {
      const newTasks = parseInput(inputText);
      props.setTasks(newTasks);
      props.setModalState(false);
      setIsInitialized(false);
    } catch (error) {
      console.error("Error saving tasks:", error);
    }
  };

  const handleCancel = () => {
    props.setModalState(false);
    setIsInitialized(false);
  };

  return (
    <Window
      fill={props.color.background.primary}
      stroke={props.color.accent.medium}
    >
      <HeaderPower title="Power Mode" color={props.color} />

      <AutoLayout
        name="Content"
        direction="vertical"
        spacing={Spacing.xs}
        width="fill-parent"
      >
        <Input
          value={inputText}
          placeholder="Enter tasks (e.g., [] Task or [x] Completed task)"
          width="fill-parent"
          inputBehavior="multiline"
          fontFamily={Font.code}
          fontSize={Font.body.medium.size}
          lineHeight={Font.body.medium.lineHeight}
          fontWeight={Font.body.medium.weight}
          fill={props.color.text.secondary}
          inputFrameProps={{
            fill: props.color.neutrals.lowest,
            cornerRadius: 4,
            padding: Spacing.m,
            minHeight: 400,
          }}
          onTextEditEnd={handleTextEditEnd}
        />

        <AutoLayout
          name="Bottom Bar"
          spacing={Spacing.xs}
          width="fill-parent"
          horizontalAlignItems="end"
          verticalAlignItems="center"
        >
          <Button
            type="ghost"
            width={150}
            height="fill-parent"
            color={props.color}
            content={TextLibrary.button.powerCancel}
            onClick={handleCancel}
          />
          <Button
            type="primary"
            width={150}
            color={props.color}
            content={TextLibrary.button.powerSave}
            onClick={handleSave}
          />
        </AutoLayout>
      </AutoLayout>
    </Window>
  );
}
