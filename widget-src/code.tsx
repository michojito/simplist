/!* Michel Rodriguez ⓒ 2024 - SimpList */
// Simplist is a simple To Do List for Figma and Figjam

const { widget } = figma
const { useSyncedMap, useSyncedState, usePropertyMenu, AutoLayout, Text } = widget

// Imports
import { Task } from "./class/Task"
import { EditWindow } from "./windows/edit"
import { InfoWindow } from "./windows/info"
import { MainWindow } from "./windows/main"
import { MenuWindow } from "./windows/menu"


/* Main function that handle the whole Widget */
function Main () {

  // Data
  const initialValue : Task[] = []
  const [data, setData] = useSyncedState("data", initialValue)

  // State Machine
  const [isPowerMode, setPowerMode] = useSyncedState('isPowerMode', false)
  const [isEditOpen, setEditOpen] = useSyncedState('isEditOpen', false)
  const [isSettingsOpen, setSettingsOpen] = useSyncedState('isSettingsOpen', false)
  const [isInfosOpen, setInfosOpen] = useSyncedState('isInfosOpen', false)
  const [isHideCompleted, setHideCompleted] = useSyncedState('isHideCompleted', false)

  const [accentColor, setAccentColor] = useSyncedState('accentColor', 
  {main: '#0038FF',  text: '#FFF'})


  return (
    <AutoLayout name='Widget' overflow='visible'>

      { 
        // Main Window Selector (Main | Power | Edit)

        isEditOpen ? (

          <EditWindow 
            accentColor={{content: accentColor, set: setAccentColor}}
            data={{content: data, set: setData}}
            isEditOpen={{content: isEditOpen, set:setEditOpen}} />

        ) : isPowerMode ? (

          <Text>Power Mode</Text>

        ) : (

          <MainWindow 
            accentColor={accentColor}
            data={{content: data, set:setData}}
            isSettingsOpen={{content:isSettingsOpen, set:setSettingsOpen}}
            isHideCompleted={isHideCompleted}/>

        )
      }
      {
        // If Info is True open the Info Window

        isInfosOpen && (
          <AutoLayout name='Infos Window' positioning='absolute'
            x={{type: 'left', offset: -260}} y={{type: 'top', offset: 0}}>
              <InfoWindow 
                accentColor={accentColor}
                setInfo={setInfosOpen} />
          </AutoLayout>
        )
      }
      {
        // If Settings are True opwn the Settings Window
        
        isSettingsOpen && (
          <AutoLayout name='Settings Window' positioning='absolute'
            x={{type: 'right', offset: -157}} y={50}>
              <MenuWindow 
                setSettingsOpen={setSettingsOpen}
                setInfosOpen={setInfosOpen}
                setEditOpen={setEditOpen}
                isHideCompleted={{content: isHideCompleted, set: setHideCompleted}}
                setData={setData} />
          </AutoLayout>
        )
      }
    </AutoLayout>
  )
}

widget.register(Main)

