const { widget } = figma
const {AutoLayout, Text} = widget

//Import
import { ColorPalette, Spacing } from "../../constants";
import { TextLibrary } from "../../models/TextLibrary";
import { Window } from "../../views/containers/Window";
import { Button } from "../../views/controls/buttons/Button";
import { HeaderPower } from "../../views/header/HeaderPower";

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
export function PowerModePage (props: Props) {
    
    return (
        <Window fill={props.color.background.primary} stroke={props.color.accent.medium} >
            <HeaderPower title='Todo' color={props.color} />

            <AutoLayout
                name='Content'
                direction='vertical'
                spacing={Spacing.xs}
                width='fill-parent'
            >
                {
                    //Input
                }
                <AutoLayout
                    name='Bottom Bar'
                    spacing={Spacing.xs}
                    width='fill-parent'
                    horizontalAlignItems='end'
                    verticalAlignItems='center'
                >
                    <Button type='ghost' width={150} height='fill-parent' color={props.color} content={TextLibrary.button.powerCancel}
                        onClick={() => {
                            props.mode.set({
                                powerMode: !props.mode.state.powerMode,
                                editOpen: props.mode.state.editOpen,
                                settingOpen: props.mode.state.settingOpen,
                                infoOpen: props.mode.state.infoOpen,
                                menuOpen: props.mode.state.menuOpen,
                              })
                        }}
                    />
                    <Button type='primary' width={150} color={props.color} content={TextLibrary.button.powerSave}
                        onClick={() => {
                            props.mode.set({
                                powerMode: !props.mode.state.powerMode,
                                editOpen: props.mode.state.editOpen,
                                settingOpen: props.mode.state.settingOpen,
                                infoOpen: props.mode.state.infoOpen,
                                menuOpen: props.mode.state.menuOpen,
                              })
                        }}
                    />
                </AutoLayout>
            </AutoLayout>
        </Window>
    )
}