const { widget } = figma
const { AutoLayout } = widget

// Imports
import { ColorPalette } from "../../constants";
import { MenuModal } from "../modals/MenuModal";
import { InfoModal } from "../modals/InfoModal";

type TaskType = {
    UUID: number;
    content: string;
    checked: boolean;
    subtasks: TaskType[];
};

type Props = {
    // Modals
    menuOpen: boolean
    setMenuOpen: (newValue: boolean | ((currValue: boolean) => boolean)) => void

    editModeOpen: boolean
    setEditModeOpen: (newValue: boolean | ((currValue: boolean) => boolean)) => void

    infoModalOpen: boolean
    setInfoModalOpen: (newValue: boolean | ((currValue: boolean) => boolean)) => void

    settingsModalOpen: boolean
    setSettingsModalOpen: (newValue: boolean | ((currValue: boolean) => boolean)) => void

    colorModalOpen: boolean
    setColorModalOpen: (newValue: boolean | ((currValue: boolean) => boolean)) => void

    // Component
    children?: FigmaDeclarativeNode
    color: ColorPalette
    
    // Feature
    isHideCompleted: Boolean
    setHideCompleted: (newValue: boolean | ((currValue: boolean) => boolean)) => void
    setTask: (newValue: TaskType[] | ((currValue: TaskType[]) => TaskType[])) => void
}


export function ModalContainer(props: Props) {

    return (
        <AutoLayout name='Widget' overflow='visible'>
            {props.children}

            {props.menuOpen &&
                <MenuModal position='absolute'
                    x={{ type: 'right', offset: -202 }} y={64}
                    color={props.color}
                    isHideCompleted={props.isHideCompleted}
                    onClick={{
                        Infos: () => {
                            props.setInfoModalOpen(!props.infoModalOpen)
                            props.setMenuOpen(!props.menuOpen)
                        },
                        Edit: () => {
                            props.setEditModeOpen(!props.editModeOpen)
                            props.setMenuOpen(!props.menuOpen)
                        },
                        Settings: () => {
                            props.setSettingsModalOpen(!props.settingsModalOpen)
                            props.setMenuOpen(!props.menuOpen)
                        },
                        HideCompleted: () => {
                            props.setHideCompleted(!props.isHideCompleted)
                        },
                        ClearAll: () => {
                            props.setTask([])
                            props.setMenuOpen(!props.menuOpen)
                            console.log('cleared')
                        }
                    }}
                />
            }

            {props.infoModalOpen &&
                <InfoModal position='absolute'
                    x={{ type: 'left', offset: -266 }} y={0}
                    color={props.color}
                    onClick={() => {
                        props.setInfoModalOpen(!props.infoModalOpen)
                    }}
                />
            }
        </AutoLayout>
    )
}