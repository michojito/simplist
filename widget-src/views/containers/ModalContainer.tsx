const { widget } = figma
const {AutoLayout} = widget

// Imports
import { ColorPalette } from "../../constants";
import { MenuModal } from "../modals/MenuModal";
import { InfoModal } from "../modals/InfoModal";

type Props = {
    color: ColorPalette
    children?: FigmaDeclarativeNode

    isHideCompleted: Boolean
    setHideCompleted: (newValue: boolean | ((currValue: boolean) => boolean)) => void

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
export function ModalContainer (props: Props) {
    
    return (
        <AutoLayout name='Widget' overflow='visible'>
            {props.children}
            
            { props.mode.state.menuOpen &&
                <MenuModal position='absolute'
                    x={{ type:'right', offset: -202 }} y={64}
                    color={props.color}
                    isHideCompleted={props.isHideCompleted}
                    onClick={{
                        Infos:() => {props.mode.set({
                            powerMode: props.mode.state.powerMode,
                            editOpen: props.mode.state.editOpen,
                            settingOpen: props.mode.state.settingOpen,
                            infoOpen: !props.mode.state.infoOpen,
                            menuOpen: !props.mode.state.menuOpen
                        })},
                        Edit:() => {props.mode.set({
                            powerMode: props.mode.state.powerMode,
                            editOpen: !props.mode.state.editOpen,
                            settingOpen: props.mode.state.settingOpen,
                            infoOpen: props.mode.state.infoOpen,
                            menuOpen: !props.mode.state.menuOpen
                        })},
                        Settings:() => {props.mode.set({
                            powerMode: props.mode.state.powerMode,
                            editOpen: props.mode.state.editOpen,
                            settingOpen: !props.mode.state.settingOpen,
                            infoOpen: props.mode.state.infoOpen,
                            menuOpen: !props.mode.state.menuOpen
                        })},
                        HideCompleted: () => {
                            console.log(`Hide : ${props.isHideCompleted}`)
                            props.setHideCompleted(!props.isHideCompleted)
                            console.log(`Hide After: ${props.isHideCompleted}`)
                        }
                    }}
                />
            }
            
            { props.mode.state.infoOpen &&
                <InfoModal position='absolute'
                    x={{ type:'left', offset: -266 }} y={0}
                    color={props.color}
                    onClick={() => {props.mode.set( {
                        powerMode: props.mode.state.powerMode,
                        editOpen: props.mode.state.editOpen,
                        settingOpen: props.mode.state.settingOpen,
                        infoOpen: !props.mode.state.infoOpen,
                        menuOpen: props.mode.state.menuOpen})}}
                />
            }
        </AutoLayout>
    )
}