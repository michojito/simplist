const { widget } = figma
const { AutoLayout } = widget

import { ColorPalette, Spacing } from "../../../constants"


type Props = {
    // Styling
    color?: ColorPalette
}

export function PlaceholderTextField(props: Props) {
    return (
        <AutoLayout
            name='TextField'
            direction='vertical'
            spacing={Spacing.xs}
            width='fill-parent'
        >
            <AutoLayout
                name='Input Container'
                direction='horizontal'
                spacing={Spacing.xs}
                width='fill-parent'
            >
                <AutoLayout
                    name="Input"
                    fill={props.color?.neutrals.lowest ?? "#F0F2F3"}
                    cornerRadius={4}
                    overflow="visible"
                    padding={{
                        vertical: Spacing.s,
                        horizontal: Spacing.m,
                    }}
                    width="fill-parent"
                    verticalAlignItems="center"
                    height={48}
                />
                <AutoLayout
                    fill={props.color?.neutrals.low ?? "#C9CFD2"}
                    width={48}
                    height={48}
                    cornerRadius={4}
                />
            </AutoLayout>
        </AutoLayout>
    )
}