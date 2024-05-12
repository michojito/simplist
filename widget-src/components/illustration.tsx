import { color, font, spacing } from "../global"

const { widget } = figma
const { Frame, AutoLayout, Text } = widget

export function EmptyState () {

    return (
        <AutoLayout name='Container' verticalAlignItems="center" spacing={spacing.medium} width='fill-parent'>
            <Frame width={150} height={150}></Frame>
            <AutoLayout name='Text' direction="vertical" width='fill-parent' verticalAlignItems="center">
                <Text name='Title' fontSize={font.body} fontWeight={600} fill={color.text} width="fill-parent">
                    Oops, nothing here!
                </Text>
                <Text name='Title' fontSize={font.footnote} fontWeight={600} fill={color.greyLow} width="fill-parent">
                    bla bla bla
                </Text>
            </AutoLayout>
        </AutoLayout>
    )
}