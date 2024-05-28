import { Font, Spacing } from "../../constants"

const { widget } = figma
const {AutoLayout, Text, Line} = widget

type Props = {
    title: string
}

export function Header (props: Props) {
    
    return (
        <AutoLayout
            name='Header'
            direction='vertical'
            spacing={Spacing.m}
            width='fill-parent'
        >
            <AutoLayout
                name='Bar'
                spacing={Spacing.xxs}
                verticalAlignItems='center'
                width='fill-parent'
            >
                <Text 
                    name='Title'
                    fill='#161616'
                    width='fill-parent'
                    fontFamily={Font.family}
                    fontSize={Font.heading.bolder.size}
                    fontWeight={Font.heading.bolder.weight}
                >
                    {props.title}
                </Text>
            </AutoLayout>
            <Line name='Separator' stroke='#EFEFEF' length='fill-parent' />
        </AutoLayout>
    )
}