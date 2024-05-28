const { widget } = figma
const { usePropertyMenu, AutoLayout, Text } = widget
import { color, spacing, font, cornerRadius, Infos } from '../global'
import { Eye, EyeCross, InfoCircle, Slider, TrashOutline } from '../components/icons'

//Components
import { Window } from "../components/window"
import { Separator } from '../components/separator'
import { Task } from '../class/Task'

interface MenuProps {
    setSettingsOpen: (newValue: boolean | ((currValue: boolean) => boolean)) => void
    setInfosOpen: (newValue: boolean | ((currValue: boolean) => boolean)) => void
    setEditOpen: (newValue: boolean | ((currValue: boolean) => boolean)) => void
    isHideCompleted: {
        content: boolean,
        set: (newValue: boolean | ((currValue: boolean) => boolean)) => void
    }
    setData: (newValue: Task[] | ((currValue: Task[]) => Task[])) => void
}

export function MenuWindow (props: MenuProps) {

    return (
        <Window direction="vertical" small={true} width={200}>
            <AutoLayout
                name="List"
                direction="vertical"
                spacing={spacing.lowest}
                padding={{
                    vertical: spacing.lowest,
                    horizontal: spacing.lowest,
                }}
                width="fill-parent"
                verticalAlignItems="center"
                >
                    <MenuItem onClick={() => { props.setSettingsOpen(false); props.setEditOpen(true) }}>
                        <Slider color={color.black} size={[16,16]}/>
                        <Text fontFamily="Inter" fontSize={17} fontWeight={500} fill={color.black}>
                            Edit
                        </Text>
                    </MenuItem>
                    <MenuItem onClick={() => { props.setSettingsOpen(false); props.isHideCompleted.set(!props.isHideCompleted.content) }}>
                        { props.isHideCompleted.content ? 
                                (<>
                                    <Eye color={color.black} size={[16,16]}/>
                                    <Text fontFamily="Inter" fontSize={17} fontWeight={500} fill={color.black}>
                                        Show Completed
                                    </Text>
                                </>) :
                                (<>
                                    <EyeCross color={color.black} size={[16,16]}/>
                                    <Text fontFamily="Inter" fontSize={17} fontWeight={500} fill={color.black}>
                                        Hide Completed
                                    </Text>
                                </>)
                        }
                    </MenuItem>
                    <Separator/>
                    <MenuItem onClick={() => { props.setSettingsOpen(false); props.setInfosOpen(true) }}>
                        <InfoCircle color={color.black} size={[16,16]}/>
                        <Text fontFamily="Inter" fontSize={17} fontWeight={500} fill={color.black}>
                            Infos
                        </Text>
                    </MenuItem>
                    <Separator/>
                    <MenuItem onClick={() => { props.setSettingsOpen(false); props.setData([]) }}>
                        <TrashOutline color={color.error} size={[16,16]}/>
                        <Text fontFamily="Inter" fontSize={17} fontWeight={500} fill={color.error}>
                            Clear all
                        </Text>
                    </MenuItem>
                </AutoLayout>
        </Window>
    )
}

interface Props extends BaseProps, WidgetJSX.AutoLayoutSizeProps {
    children: FigmaDeclarativeNode | null;
}

function MenuItem (props : Props){

    return (
        <AutoLayout
            spacing={spacing.lower}
            padding={{
                vertical: spacing.lowest,
                horizontal: spacing.lowest,
            }}
            width="fill-parent"
            verticalAlignItems="center"
            {...props}
            hoverStyle={{
                fill: `${color.greyVeryLow}`,
              }}
            >
            {props.children}
        </AutoLayout>
        
    )
}