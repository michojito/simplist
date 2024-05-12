const { widget } = figma
const { useSyncedState, Input, AutoLayout, Text } = widget
import { Task } from '../class/Task'
import { color, spacing, font, cornerRadius } from '../global'
import { Button } from './button'
import { Plus } from './icons'

interface Props {
    data: (newValue: Task[] | ((currValue: Task[]) => Task[])) => void
}
export function InputBar (props: Props) {
    const [text, setText] = useSyncedState("text", "")
    const [err, setErr] = useSyncedState("input Err", false)

    return(
        <AutoLayout name='Text Field' direction="vertical" spacing={spacing.lowest} width='fill-parent'>
            <AutoLayout name='Field Container'
            width='fill-parent' spacing={spacing.lower}>
            
                <Input value={text} placeholder="Add new task"
                    width='fill-parent' fontSize={font.body} fill={color.greyHigh}
                    onTextEditEnd={(e) => {
                        setErr(false);
                        setText(e.characters);
                    }}
                    placeholderProps={{
                        fill: `${err ? color.error : color.greyMedium}`,
                        opacity: 1
                    }}
                    inputFrameProps={{
                        fill: `${color.greyVeryLow}`,
                        stroke: err ? `${color.error}` : undefined ,
                        cornerRadius: cornerRadius.low,
                        padding: {
                            vertical: spacing.low,
                            horizontal: spacing.medium
                        },
                    }}
                />

                <Button 
                    onClick={() => {
                        if (text === undefined || text === ''){
                            setErr(true);
                        } else {
                            setErr(false);
                            props.data( previousData => previousData.concat(new Task(false, text))); setText('') 
                        }
                        }} >
                    <Plus color={color.textAccent} />
                </Button>

            </AutoLayout>
            {err && (
                <Text name="Error" fontSize={font.footnote} fontWeight={500} fill={color.error}>
                    Error: Enter text to Add a Task
                </Text>
            )}
        </AutoLayout>
    )
}