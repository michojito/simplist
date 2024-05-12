const { widget } = figma
const { usePropertyMenu, AutoLayout, Text } = widget
import { color, spacing, font, cornerRadius, Infos } from '../global'
import { Eye, EyeCross, InfoCircle, Slider, TrashOutline } from '../components/icons'

//Components
import { Window } from "../components/window"
import { Separator } from '../components/separator'
import { Task } from '../class/Task'

interface MenuProps {
    setMenu: (newValue: boolean | ((currValue: boolean) => boolean)) => void
    setInfo: (newValue: boolean | ((currValue: boolean) => boolean)) => void
    setEdit: (newValue: boolean | ((currValue: boolean) => boolean)) => void
    setHideCompleted: (newValue: boolean | ((currValue: boolean) => boolean)) => void
    hideCompleted: boolean
    data: (newValue: Task[] | ((currValue: Task[]) => Task[])) => void
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
                    <MenuItem onClick={() => { props.setMenu(false); props.setEdit(true) }}>
                        <Slider color={color.black} size={[16,16]}/>
                        <Text fontFamily="Inter" fontSize={17} fontWeight={500} fill={color.black}>
                            Edit
                        </Text>
                    </MenuItem>
                    <MenuItem onClick={() => { props.setMenu(false); props.setHideCompleted(!props.hideCompleted) }}>
                        { props.hideCompleted ? 
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
                    <MenuItem onClick={() => { props.setMenu(false); props.setInfo(true) }}>
                        <InfoCircle color={color.black} size={[16,16]}/>
                        <Text fontFamily="Inter" fontSize={17} fontWeight={500} fill={color.black}>
                            Infos
                        </Text>
                    </MenuItem>
                    <Separator/>
                    <MenuItem onClick={() => { props.setMenu(false); props.data([]) }}>
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