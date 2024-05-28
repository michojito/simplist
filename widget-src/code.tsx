/!* Michel Rodriguez ⓒ 2024 - SimpList */
// Simplist is a simple To Do List for Figma and Figjam

const { widget } = figma
const { useSyncedState } = widget

// Imports
import { Colors } from './constants'
import { shadeColor } from './utils'

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
    firstOpen: false
  })

  // Colors
  const [lightMode, setLightMode] = useSyncedState('lightMode', true)
  const [color, setColor] = useSyncedState('color', {})

  // Open Onboarding View
  if (!mode.firstOpen) {
    return (
      <></>
    )
  }
  // Open Setting View
  if (!mode.settingOpen) {
    return (
      <></>
    )
  }
  // Open Edit View
  if (!mode.editOpen) {
    return (
      <></>
    )
  }
  // Open PowerMode View
  if (!mode.powerMode) {
    return (
      <></>
    )
  }

  
 
}

widget.register(Main)
