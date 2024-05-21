const { widget } = figma
const {AutoLayout, Text} = widget

// Import
import { color, spacing, font } from '../global'
import { Button } from './button'
import { Logo, Ellipsis } from './icons'

interface Props {
    accentColor: {main: string;text: string;}
    title: string
    onClick?: (event: WidgetClickEvent) => Promise<any> | void
}

export function Heading (props: Props) {
    return (
        <AutoLayout
            name='Heading'
            overflow='visible'
            spacing={spacing.lowest}
            width='fill-parent'
            verticalAlignItems='center'
        >
            <Logo color={props.accentColor.main} size={[36,36]} />
            <Text
                name='Title'
                fill={color.text}
                width='fill-parent'
                fontFamily='Inter'
                fontSize={font.h1}
                fontWeight={600}
            >
             {props.title}
            </Text>
            <Button type='ghost' onClick={props.onClick}><Ellipsis color={color.greyMedium}/></Button>
            
        </AutoLayout>
    )
}

export function EditHeading (props: Props) {
    return (
        <AutoLayout
            name='Heading'
            overflow='visible'
            spacing={spacing.lowest}
            width='fill-parent'
            verticalAlignItems='center'
        >
            <Logo color={props.accentColor.main} size={[36,36]} />
            <Text
                name='Title'
                fill={color.text}
                width='fill-parent'
                fontFamily='Inter'
                fontSize={font.h1}
                fontWeight={600}
            >
             {props.title}
            </Text>
            <Button type='ghost' onClick={props.onClick}>
                <Text name='Action' fill={props.accentColor.main} fontSize={font.body}>Done</Text>
            </Button>
            
        </AutoLayout>
    )
}