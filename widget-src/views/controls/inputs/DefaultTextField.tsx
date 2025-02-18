const { widget } = figma;
const { AutoLayout, useSyncedState, Input, Text } = widget;

//Imports
import { ColorPalette, CornerRadius, Font, Spacing } from "../../../constants";
import { TextLibrary } from "../../../models/TextLibrary";
import { Button } from "../buttons/Button";

type Props = {
  // Styling
  color?: ColorPalette;

  onAddTask: (taskContent: string) => void;
};
export function DefaultTextField(props: Props) {
  const [text, setText] = useSyncedState("text", "");
  const [err, setErr] = useSyncedState("input Err", false);

  const handleAddTask = () => {
    const trimmedText = text.trim();
    if (trimmedText !== "") {
      props.onAddTask?.(trimmedText);
      setText("");
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <AutoLayout
      name="TextField"
      direction="vertical"
      spacing={Spacing.xs}
      width="fill-parent"
    >
      <AutoLayout
        name="Input Container"
        direction="horizontal"
        spacing={Spacing.xs}
        width="fill-parent"
      >
        <Input
          name="Input"
          value={text}
          placeholder={TextLibrary.inputPlaceholder}
          width="fill-parent"
          fontFamily={Font.family}
          fontSize={Font.body.medium.size}
          fontWeight={Font.body.medium.weight}
          lineHeight={Font.body.medium.lineHeight}
          onTextEditEnd={(e) => {
            setText(e.characters);

            // Attempt to add task on text edit end
            if (e.characters.trim() !== "") {
              handleAddTask();
            }

            setErr(false);
          }}
          placeholderProps={{
            fill: err
              ? props.color?.danger.medium
              : props.color?.text.secondary,
            opacity: 1,
          }}
          inputBehavior="wrap"
          inputFrameProps={{
            fill: props.color?.neutrals.lowest,
            stroke: err ? props.color?.danger.medium : undefined,
            cornerRadius: CornerRadius.s,
            padding: {
              vertical: Spacing.s,
              horizontal: Spacing.m,
            },
          }}
        />
        <Button
          type="primary"
          leadingIcon="plus"
          color={props.color}
          onClick={handleAddTask}
        />
      </AutoLayout>
      {err && (
        <Text
          name="Error"
          fontFamily={Font.family}
          fontSize={Font.footnote.medium.size}
          fontWeight={Font.footnote.medium.weight}
          lineHeight={Font.footnote.medium.lineHeight}
          fill={props.color?.danger.medium}
        >
          {TextLibrary.inputError}
        </Text>
      )}
    </AutoLayout>
  );
}
