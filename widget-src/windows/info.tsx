const { widget } = figma
const { usePropertyMenu, AutoLayout, Text } = widget
import { color, spacing, font, cornerRadius, Infos } from '../global'

//Components
import { Window } from "../components/window"
import { Button } from '../components/button'
import { Globe, Logo, LogoGithub } from '../components/icons'

interface Props {
    accentColor: {main: string;text: string;}
    setInfo: (newValue: boolean | ((currValue: boolean) => boolean)) => void
}

export function InfoWindow (props : Props) {

    return (
        <Window direction="vertical" width={250}>
            <AutoLayout
                name="Link Bar"
                spacing={spacing.low}
                width="fill-parent"
                overflow='visible'
                horizontalAlignItems="end"
                verticalAlignItems="center"
            >
                <Button type='ghost' href='https://mr-michel.com' onClick={() => console.log(`click`)}>
                    <Globe color={color.greyLow} size={[16,16]} />
                </Button>
                <Button type='ghost' href='https://github.com/MrMichelr' onClick={() => console.log(`click`)}>
                    <LogoGithub color={color.greyLow} size={[16,16]} />     
                </Button>
            </AutoLayout>
            <AutoLayout
                name="Logo Container"
                spacing={spacing.none}
                horizontalAlignItems="center"
                verticalAlignItems="center"
                fill={props.accentColor.main}
                cornerRadius={cornerRadius.medium}
            >
                <Logo color={props.accentColor.text} size={[52,52]}/>
            </AutoLayout>
            <AutoLayout
                name="Heading"
                spacing={spacing.lowest}
                horizontalAlignItems="center"
                verticalAlignItems="center"
                direction='vertical'
            >
                <Text
                    name="Title"
                    fill={color.text}
                    fontFamily="Inter"
                    fontSize={font.body}
                    fontWeight={600}
                    >
                    {Infos.name}
                </Text>
                <Text
                    name="Version"
                    fill={color.greyLow}
                    fontFamily="Inter"
                    fontSize={font.footnote}
                    fontWeight={500}
                    >
                    version {Infos.version} - Still WIP
                </Text>
            </AutoLayout>
            <Text
                name="Copyright"
                fill={color.greyLow}
                fontFamily="Inter"
                fontSize={font.caption}
                fontWeight={500}
                >
                Copyright © {new Date().getFullYear()} {Infos.author}
            </Text>
            <Button
                plainColor={props.accentColor.main}
                width="fill-parent"
                onClick={() => props.setInfo(false)}
                >
                <Text
                    name="Text"
                    fill={props.accentColor.text}
                    fontFamily="Inter"
                    fontSize={font.body}
                    fontWeight={500}
                    >
                    OK
                </Text>
            </Button>
        </Window>
    )
}