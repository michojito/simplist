const { widget } = figma
const {AutoLayout, Text, Line} = widget

// Import
import { ColorPalette, CornerRadius, Font, Spacing } from "../../constants";
import { TextLibrary } from "../../models/TextLibrary";

// Views
import { Window } from "../../views/containers/Window";
import { ModeSelector } from "../../views/controls/ModeSelector";
import { HeaderButton } from "../../views/header/HeaderButton";


type Props = {
    color: ColorPalette

    onMenu?: ((event: WidgetClickEvent) => void | Promise<any>)
    lightMode: {
        current: boolean,
        set: (newValue: boolean | ((currValue: boolean) => boolean)) => void
    }
}

export function SettingsPage (props: Props) {
    return (
        <Window fill={props.color.background.primary} stroke={props.color.neutrals.lowest}>
            <HeaderButton title='Settings' color={props.color} onClick={props.onMenu}/>

            <AutoLayout
                name='Content'
                direction='vertical'
                spacing={Spacing.xxl}
                width='fill-parent'
                horizontalAlignItems='center'
            >
                <AutoLayout
                    name='List'
                    direction='vertical'
                    width='fill-parent'
                >
                    <AutoLayout
                        name='Item'
                        spacing='auto'
                        width='fill-parent'
                        verticalAlignItems='center'
                        padding={{
                            vertical: Spacing.xs ,
                            horizontal: Spacing.none ,
                        }}
                    >  
                        <Text
                            name='Label'
                            fontFamily={Font.family}
                            fontSize={Font.body.medium.size}
                            fontWeight={Font.body.medium.weight}
                            lineHeight={Font.body.medium.lineHeight}
                            fill={props.color?.text.primary}
                        >
                            {TextLibrary.settings.appearance}
                        </Text>
                        <AutoLayout
                            name='Options'
                            spacing={Spacing.xxs}
                        >
                            <ModeSelector 
                                color={props.color} mode='Light'
                                lightMode={props.lightMode.current}
                                onClick={() => {props.lightMode.set(true) }}
                            />
                            <ModeSelector 
                                color={props.color} mode='Dark'
                                lightMode={props.lightMode.current}
                                onClick={() => { props.lightMode.set(false) }}
                            />

                        </AutoLayout>
                    </AutoLayout>

                    <Line 
                        name='Separator'
                        stroke={props.color.neutrals.lowest} 
                        length='fill-parent'
                    />

                    <AutoLayout
                        name='Item'
                        spacing='auto'
                        width='fill-parent'
                        verticalAlignItems='center'
                        padding={{
                            vertical: Spacing.xs ,
                            horizontal: Spacing.none ,
                        }}
                    >  
                        <Text
                            name='Label'
                            fontFamily={Font.family}
                            fontSize={Font.body.medium.size}
                            fontWeight={Font.body.medium.weight}
                            lineHeight={Font.body.medium.lineHeight}
                            fill={props.color?.text.primary}
                        >
                            {TextLibrary.settings.accentColor}
                        </Text>
                        <AutoLayout
                            name='Option'
                            spacing={Spacing.xxs}
                            height={48}
                            width={48}
                            cornerRadius={CornerRadius.s}
                            fill={props.color.accent.medium}
                            hoverStyle={{
                                fill: props.color.accent.high
                            }}
                        />

                    </AutoLayout>
                </AutoLayout>
            </AutoLayout>
        </Window>
    )
}