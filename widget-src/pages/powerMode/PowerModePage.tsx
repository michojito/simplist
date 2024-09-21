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

    // Modal State
    ModalState: boolean
    setModalState: (newValue: boolean | ((currValue: boolean) => boolean)) => void
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
                            props.setModalState(false)
                        }}
                    />
                    <Button type='primary' width={150} color={props.color} content={TextLibrary.button.powerSave}
                        onClick={() => {
                            // TODO: Save action
                            props.setModalState(false)
                        }}
                    />
                </AutoLayout>
            </AutoLayout>
        </Window>
    )
}