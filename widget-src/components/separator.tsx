const { widget } = figma
const {AutoLayout, Line} = widget
import { color, spacing, cornerRadius } from '../global'

enum Type {
    default,
    task = 'task'
}
enum StrokeWidth {
    none,
    thin
}

export function Separator ({type = Type.default, colour = color.greyVeryLow, width = StrokeWidth.thin} : {type?: Type | string; colour?: string; width?:StrokeWidth}) {

    switch (type) {
        case Type.task:
            return (
                <AutoLayout name="Separator" width="fill-parent" padding={{top: spacing.lower, bottom: spacing.lower, left:spacing.higher, right:spacing.none }}>
                    <Line
                        stroke={colour}
                        strokeWidth={width}
                        length="fill-parent"
                    />
                </AutoLayout>
            )

        default:
            return (
                <Line
                    name="Separator"
                    stroke={colour}
                    strokeWidth={width}
                    length="fill-parent"
                />
            )
    }
   
}