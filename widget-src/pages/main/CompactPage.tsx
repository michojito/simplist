import { ColorPalette } from "../../constants";
import { Window } from "../../views/containers/Window";
import { Header } from "../../views/header/HeaderBase";

type Props = {
  color: ColorPalette;

  // Modals
  menuOpen: boolean;
  setMenuOpen: (newValue: boolean | ((currValue: boolean) => boolean)) => void;

  // Tasks
  tasks?: Task[]; // Optional because we only need to display the count
};

export function CompactPage(props: Props) {
  return (
    <Window
      fill={props.color.background.primary}
      stroke={props.color.neutrals.lowest}
    >
      <Header
        title={`Todo (${props.tasks?.length ?? 0})`}
        color={props.color}
        onClick={() => {
          props.setMenuOpen(!props.menuOpen);
        }}
        noLine
      />
    </Window>
  );
}
