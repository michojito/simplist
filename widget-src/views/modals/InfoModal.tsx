const { widget } = figma
const { AutoLayout, Text, useEffect, waitForTask } = widget

// Imports
import { App, ColorPalette, CornerRadius, Font, Spacing } from "../../constants";
import { TextLibrary } from "../../models/TextLibrary";
import { Icon } from "../Icon";
import { Modal } from "../containers/Modal"
import { Button } from "../controls/buttons/Button";

type Props = {
    
    // Modal Positionning
    position?: "auto" | "absolute"
    y?: number | WidgetJSX.VerticalConstraint
    x?: number | WidgetJSX.HorizontalConstraint

    // Styling
    color: ColorPalette
    onClick?: ((event: WidgetClickEvent) => void | Promise<any>)
}

export function InfoModal (props:Props) {
    
    const openUrl = (url: string) => {
        return new Promise((resolve) => {
            figma.showUI(__html__, { visible: false })
            figma.ui.postMessage({ type: 'open-url', url })
            figma.ui.onmessage = () => {
                figma.closePlugin()
                resolve(null)
            }
        })
    }

    return(
        <Modal
            position={props.position}
            y={props.y}
            x={props.x}
            fill={props.color.background.modal}
            stroke={props.color.neutrals.lowest}
            padding={Spacing.m}
            spacing={Spacing.l}
        >
            <AutoLayout
                name='LinkBar'
                width='fill-parent'
                horizontalAlignItems='end'
                verticalAlignItems='center'
                spacing={Spacing.xs}
            >
                <Button 
                    type='mini-ghost' 
                    color={props.color} 
                    textColor={props.color.text.secondary} 
                    leadingIcon='globe' 
                    onClick={() => waitForTask(openUrl(App.url.website))}
                />
                <Button 
                    type='mini-ghost' 
                    color={props.color} 
                    textColor={props.color.text.secondary} 
                    leadingIcon='logo.github'
                    onClick={() => waitForTask(openUrl(App.url.github))}
                />
            </AutoLayout>

            <AutoLayout
                name='Content'
                width='fill-parent'
                horizontalAlignItems='center'
                verticalAlignItems='start'
                direction='vertical'
                spacing={Spacing.xs}
            >
                <AutoLayout
                    name='LogoContainer'
                    width={52}
                    height={52}
                    fill={props.color.accent.medium}
                    cornerRadius={CornerRadius.m}
                    horizontalAlignItems='center'
                    verticalAlignItems='center'
                >
                    <Icon name='Logo' svg='logo' fill={props.color.text.accent} size={{w:52, h:52}}/>
                </AutoLayout>
                <AutoLayout
                    name='Text'
                    width='fill-parent'
                    direction='vertical'
                    horizontalAlignItems='center'
                    spacing={Spacing.s}
                >
                    <Text
                        name='Title'
                        fill={props.color.text.primary}
                        fontFamily={Font.family}
                        fontSize={Font.body.bolder.size}
                        fontWeight={Font.body.bolder.weight}
                        lineHeight={Font.body.bolder.lineHeight}
                    >
                        {App.name}
                    </Text>
                    <Text
                        name='Version'
                        fill={props.color.text.secondary}
                        fontFamily={Font.family}
                        fontSize={Font.footnote.medium.size}
                        fontWeight={Font.footnote.medium.weight}
                        lineHeight={Font.footnote.medium.lineHeight}
                    >
                        Version {App.version}
                    </Text>
                </AutoLayout>
            </AutoLayout>
            <AutoLayout
                name='Bottom'
                width='fill-parent'
                direction='vertical'
                horizontalAlignItems='center'
                spacing={Spacing.xs}
            >
                <Text
                    name='Copyright'
                    fill={props.color.text.secondary}
                    fontFamily={Font.family}
                    fontSize={Font.caption.medium.size}
                    fontWeight={Font.caption.medium.weight}
                    lineHeight={Font.caption.medium.lineHeight}
                >
                    Copyright ©️ {new Date().getFullYear()} {App.author}
                </Text>
                <Button type='primary' color={props.color} width='fill-parent' content={TextLibrary.button.info} onClick={props.onClick}/>
            </AutoLayout>

        </Modal>
    )
}