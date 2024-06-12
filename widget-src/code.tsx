/!* Michel Rodriguez ⓒ 2024 - SimpList */
// Simplist is a simple To Do List for Figma and Figjam

const { widget } = figma
const { useSyncedState, usePropertyMenu } = widget

// Imports
import { ColorPalette } from './constants'
import { iconLibrary } from './models/IconLibrary'
import { EditPage } from './pages/edit/EditPage'
import { MainPage } from './pages/main/MainPage'
import { PowerModePage } from './pages/powerMode/PowerModePage'
import { ModalContainer } from './views/containers/ModalContainer'


// Components

/* Main function that handle the whole Widget */
function Main () {

  // State Machine
  const [isHideCompleted, setHideCompleted] = useSyncedState('isHideCompleted', true)
  const [mode, setMode] = useSyncedState('mode', {
    powerMode: false,
    editOpen: false,
    settingOpen: false,
    infoOpen: false,
    menuOpen: false,
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
      <EditPage color={color} onMenu={() => {setMode( {
        powerMode: mode.powerMode,
        editOpen: !mode.editOpen,
        settingOpen: mode.settingOpen,
        infoOpen: mode.infoOpen,
        menuOpen: mode.menuOpen})}} />
    )
  }
  // Open PowerMode View
  if (mode.powerMode) {
    return (
      <PowerModePage color={color} mode={{state:mode, set:setMode}}/>
    )
  }

  usePropertyMenu(
    [
      {
        itemType:'action',
        icon: iconLibrary('bolt', '#FFF'),
        tooltip: 'Power Mode',
        propertyName: 'powerMode',
      }
    ], ({propertyName}) => {
      if (propertyName === 'powerMode') {
        setMode({
          powerMode: !mode.powerMode,
          editOpen: mode.editOpen,
          settingOpen: mode.settingOpen,
          infoOpen: mode.infoOpen,
          menuOpen: mode.menuOpen,
        })
      }
    }
  )

  return (
    <ModalContainer color={color} mode={{state:mode, set:setMode}}>
      <MainPage color={color} mode={{state:mode, set:setMode}}/>
    </ModalContainer>
  )

  
 
}

widget.register(Main)
