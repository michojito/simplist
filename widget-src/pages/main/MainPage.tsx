import { ColorPalette } from "../../constants";
import { EmptyPage } from "./EmptyPage";

type Props = {
    color: ColorPalette

    mode: {
        state: {
            powerMode: boolean;
            editOpen: boolean;
            settingOpen: boolean;
            infoOpen: boolean;
            menuOpen: boolean;
        }
        set: (newValue: {
            powerMode: boolean;
            editOpen: boolean;
            settingOpen: boolean;
            infoOpen: boolean;
            menuOpen: boolean;
        } | ((currValue: {
            powerMode: boolean;
            editOpen: boolean;
            settingOpen: boolean;
            infoOpen: boolean;
            menuOpen: boolean;
        }) => {
            powerMode: boolean;
            editOpen: boolean;
            settingOpen: boolean;
            infoOpen: boolean;
            menuOpen: boolean;
        })) => void
    }
}
export function MainPage (props: Props) {
    
    return (
        <EmptyPage color={props.color} onMenu={() => {props.mode.set( {
            powerMode: props.mode.state.powerMode,
            editOpen: props.mode.state.editOpen,
            settingOpen: props.mode.state.settingOpen,
            infoOpen: props.mode.state.infoOpen,
            menuOpen: !props.mode.state.menuOpen})}}/>
    )
}