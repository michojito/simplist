/!* Michel Rodriguez ⓒ 2024 - SimpList */
// Simplist is a simple To Do List for Figma and Figjam

const { widget } = figma
const { useSyncedState } = widget

import { ColorPalette } from './constants'
// Imports
//import { Colors } from './constants'
import { shadeColor } from './utils'
import { Window } from './views/containers/Window'
import { Header } from './views/header/HeaderBase'

// Components


/* Main function that handle the whole Widget */
function Main () {

  // State Machine
  const [isHideCompleted, setHideCompleted] = useSyncedState('isHideCompleted', false)
  const [mode, setMode] = useSyncedState('mode', {
    powerMode: false,
    editOpen: false,
    settingOpen: false,
    infoOpen: false,
  })

  // Colors
  const [lightMode, setLightMode] = useSyncedState('lightMode', true)
  const [color, setColor] = useSyncedState('color', new ColorPalette(lightMode))


  // Open Setting View
  if (mode.settingOpen) {
    return (
      <></>
    )
  }
  // Open Edit View
  if (mode.editOpen) {
    return (
      <></>
    )
  }
  // Open PowerMode View
  if (mode.powerMode) {
    return (
      <></>
    )
  }

  return (
    <Window fill={color.background.primary} stroke={color.neutrals.lowest}>
      {console.log(color)}
      <Header title='Todo'/>
      {
        // <Input>
        // Main Content -> Empty | List
      }
    </Window>
  )

  
 
}

widget.register(Main)
